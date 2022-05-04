import React, { useState } from 'react';
import { Col, Container, Nav, Row, Offcanvas } from 'react-bootstrap';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus, faBars, faSearch, faSignOutAlt, faHome, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import { Link, } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const Header = () => {
    const { user, products, setDisplayProducts, cart, logOut, HandleFilter, show, handleShow, handleClose } = useAuth()
    const heart = <FontAwesomeIcon icon={faHeart} className="cart" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
    const search = <FontAwesomeIcon icon={faSearch} className="cart" />
    const arrow = <FontAwesomeIcon icon={faArrowAltCircleDown} className="cart" />
    const bar = <FontAwesomeIcon icon={faBars} className="cart" />
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const [inputshow, setInputShow] = useState(false);
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    return (
        <div id="top">

            <Container fluid className="header">
                <Row xs="1" md="4">
                    <Col md="2">
                        <div>
                            <h1 className="text-success fw-bold fs-1">OffersBD</h1>
                        </div>
                    </Col>
                    <Col md="3" className="nav-section">
                        <Nav className="mt-1 pt-1 text-white">
                            <Nav.Link as={HashLink} to="/home" className="text-dark fw-bold  ">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#menu" className="text-dark fw-bold">Shop</Nav.Link>
                            <Nav.Link href="#home" className="text-dark fw-bold">Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md="4" className=" search-section">
                        <div className=" mt-3">
                            <Link to="/search">
                                <input type="text" placeholder="search" onChange={handleSearch} />
                            </Link>

                        </div>
                        <Link to="/search" className="icon-panel"> <button className="iconbtn">
                            {heart}</button>
                        </Link>
                        <Link to="/cart">
                            <button className="iconbtn ">
                                {Cart} <span className="cart-item"> {totalQuantity}</span>
                            </button>
                        </Link>
                    </Col>

                    <Col md="3" className="user-section">
                        {
                            user.email ? <div>

                                <div className="dropdown">

                                    <button class="dropbtn">
                                        {user.email} {arrow}
                                    </button>
                                    <div className="dropdown-content">
                                        <Link to="/dashboard" className=" text-decoration-none">
                                            Dashbord
                                        </Link>
                                        <br />
                                        <Link to="/myorders" className=" text-decoration-none">
                                            My Orders
                                        </Link>
                                        <br />
                                        <Link to="/login">
                                            <button className="iconbtn-logOut " onClick={logOut}>
                                                LogOut <span className="cart-item"></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                                : <div className="cart-section mt-3">
                                    <Nav className="me-5">
                                        <Link to="/signup" className="icon-panel"> <button className="iconbtn">
                                            Signup</button>
                                        </Link>
                                        <Link to="/login">
                                            <button className="iconbtn ">
                                                Login <span className="cart-item"></span>
                                            </button>
                                        </Link>


                                    </Nav>
                                </div>
                        }


                    </Col>
                </Row>

            </Container>


            {/* small device */}
            <Container fluid className="header-section" >
                <Row className="header-section" xs="1">
                    <Col xs="12" className="d-flex">
                        <button className="bar-btn" onClick={handleShow}>
                            {bar}
                        </button>
                        <Link to="/placeorder" className="text-decoration-none">
                            <p className="offersbd-text">OffersBD</p>
                        </Link>


                        {/* <button className="search-btn" onClick={() => setInputShow(!inputshow)}>
                            {search}
                        </button> */}
                        <Link to="/search">
                            <button className="search-btn" >
                                {search}
                            </button>
                        </Link>
                        <Link to="/cart">
                            <button className=" cart-btn">
                                {Cart}
                            </button>
                            <span className="item-cart"> {totalQuantity}</span>
                        </Link>


                        <Offcanvas placement="start" show={show} onHide={handleClose} className="w-50 mx-auto bg-dark">
                            <Offcanvas.Header closeButton className="nav-header" >
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="mt-1">
                                <h2 className="footwear-title">Footwer</h2>
                                <hr className="hr" />
                                <Link to="/groceryproduct" className="footwear-link" >
                                    <p className="footwear-text" onClick={() => HandleFilter('Apex')} >
                                        Apex
                                    </p>
                                </Link>
                                <Link to="/groceryproduct" className="footwear-link" >
                                    <p className="footwear-text" onClick={() => HandleFilter('Bata')} >
                                        Bata
                                    </p>
                                </Link>
                                <Link to="/groceryproduct" className="footwear-link" >
                                    <p className="footwear-text" onClick={() => HandleFilter('Lotto')} >
                                        Lotto
                                    </p>
                                </Link>

                                {/* fshion */}
                                <h2 className="footwear-title">Fashion</h2>
                                <hr className="hr" />
                                <Link to="/groceryproduct" className="footwear-link" >
                                    <p className="footwear-text" onClick={() => HandleFilter('Shirt')} >
                                        Shirt
                                    </p>
                                </Link>

                                {/* electronics*/}
                                <h2 className="footwear-title">Electric</h2>
                                <hr className="hr" />
                                <Link to="/groceryproduct" className="footwear-link" >
                                    <p className="footwear-text" onClick={() => HandleFilter('Phone')} >
                                        Phone
                                    </p>
                                </Link>
                                <Link to="/groceryproduct" className="footwear-link" >
                                    <p className="footwear-text" onClick={() => HandleFilter('TV')} >
                                        TV
                                    </p>
                                </Link>
                                <Link to="/groceryproduct" className="footwear-link" >
                                    <p className="footwear-text" onClick={() => HandleFilter('MacBook')} >
                                        MacBook
                                    </p>
                                </Link>




                                {/* grocery */}

                                <h2 className="footwear-title">Grocery</h2>
                                <hr className="hr" />
                                <Link to="/groceryproduct" className="footwear-link" >
                                    <p className="footwear-text" onClick={() => HandleFilter('Beef')} >
                                        Beef
                                    </p>
                                </Link>
                                <p className="footwear-text" onClick={() => HandleFilter('Mutton')} >
                                    <Link to="/groceryproduct" className="footwear-link">Mutton</Link>
                                </p>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Col>
                    {/* {
                        inputshow ? <div className="input-section" >
                            <input type="text" placeholder="Search a product" onChange={handleSearch} />
                        </div> : null
                    } */}
                    {
                        inputshow ? <div className="serch-section-small">

                            {/* <span className="search-icon">{search}</span> */}
                            <div className="search-inner-small">
                                <input type="text" placeholder=" search here " value={value} onChange={onChange} />
                                <button className="search-btn-small" onClick={() => onSearch(value)}>{search}</button>
                            </div>

                            <div className="dropdown-small">
                                {products
                                    .filter((item) => {
                                        const searchTerm = value.toLowerCase();
                                        const fullName = item.name.toLowerCase();

                                        return (
                                            searchTerm &&
                                            fullName.startsWith(searchTerm) &&
                                            fullName !== searchTerm
                                        );
                                    })
                                    .slice(0, 10)
                                    .map((item) => (
                                        <div
                                            onClick={() => onSearch(item.name)}
                                            className="dropdown-row"
                                            key={item.name}
                                        >
                                            {item.name}
                                        </div>
                                    ))}
                            </div>

                        </div>

                            : null
                    }


                </Row>
            </Container>
          
        </div >
    );
};

export default Header;