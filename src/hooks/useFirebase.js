import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, getIdToken } from "firebase/auth";
import initializeAuthentication from './firebase.init';
import { getStoredCart } from './fakeDB';
initializeAuthentication()

const useFirebase = () => {
    const [products, setProducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [categoryProduct, setCategoryProduct] = useState([])
    const [categoryName, setCategoryName] = useState([])
    const [categoryGender, setCategoryGender] = useState([])
    const [categoryBrand, setCategoryBrand] = useState([])
  

    const HandleFilter = (catItem) => {
        const result = products.filter((catData) => {
            return (catData.category === catItem
            );
        });
        setCategoryProduct(result);
        setDisplayProducts(result)
        setCategoryName(catItem)

    }
    const GenderFilter = (catGender) => {
        const result = products.filter((catData) => {
            return (catData.gender === catGender
            );
        });
        setCategoryProduct(result);
        setCategoryGender(result);
        setCategoryBrand(result);
     

    }
    const BrandFilter = (catBrand) => {
        const result = products.filter((catData) => {
            return (catData.brand === catBrand
            );
        });
        setCategoryBrand(result);
        setCategoryGender(result);
        setCategoryProduct(result);
    }
   






    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const _id in savedCart) {
                const addedProduct = products.find(product => product._id === _id);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[_id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);





    // users sections 
    const [user, setUser] = useState({})
    const [isLoading, setLoading] = useState(true)
    // for name
    const [name, setName] = useState('')
    // for email
    const [email, setEmail] = useState('')
    // for pass 
    const [pass, setPass] = useState('')
    // pass 6 er kom hoile tar jonno state 
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')
    // email handle
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    // pass handle
    const handlePass = e => {
        setPass(e.target.value)
    }
    // handle name
    const handleName = event => {
        setName(event.target.value)
    }
    // name 
    const setUserName = () => {
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(result => {
            // Profile updated!
            // ...
        })
            .finally(() =>
                setLoading(false)
            )
    }
    const auth = getAuth();
    //  register er jonno user create 
    const registerUser = (email, pass) => {
        setLoading(true)
        if (pass.length < 6) {
            setError('pass must be 6 character')
            return
        }
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    //  for signin 
    const logInUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return unsubscribed
    }, [])
    useEffect(() => {
        fetch(`https://obscure-badlands-58635.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })

    }, [user.email])
    const logOut = () => {
        setLoading(true)

        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => {
                setLoading(false)
            });;
    }

    return {
        products, displayProducts, setDisplayProducts, show, handleShow, handleClose, HandleFilter, GenderFilter, BrandFilter, categoryProduct, categoryName, user, registerUser, logInUser, admin, token, logOut, isLoading,
        setError, error, handleEmail, handlePass, handleName, setUserName, email, pass, setUser, name, setLoading, cart, setCart
    }
};

export default useFirebase;