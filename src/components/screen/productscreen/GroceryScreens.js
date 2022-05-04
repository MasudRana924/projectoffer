import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './GroceryScreen.css'
import useAuth from '../../../hooks/useAuth';
import { addToDb } from '../../../hooks/fakeDB';
import { Link } from 'react-router-dom';

const GroceryScreens = (props) => {
    const {_id,name, img, price, url } = props.groceryProduct
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
    const { cart, setCart, products } = useAuth()
    const handleAddToCart = () => {
        const exists = cart.find(pd => pd._id === props.groceryProduct._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== props.groceryProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, props.groceryProduct];
        }
        else {
            products.quantity = 1;
            newCart = [...cart,props.groceryProduct];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(props.groceryProduct._id);
        alert('item added to cart')



    }
    return (
        <Col className="mt-3">
            <Link to={`/details/${_id}`} className="text-decoration-none text-dark">
            <div className="product-card">
                {/* <img src={`data:image/png;base64,${img}`}alt="" className="card-img" /> */}
                <img src={img} alt="" className="card-img" />
                <h6>{name}</h6>
                <p className="price">Cost {price}tk/kg</p>

                {
                    url ? <a href={url} target="_blank" rel="noopener noreferrer">
                        <button className="btn-cart">Purchase</button>
                    </a>
                        :
                        <button className="btn-add-cart" onClick={handleAddToCart} >{Cart} </button>
                }


            </div>
            </Link>

        </Col>
    );
};

export default GroceryScreens;