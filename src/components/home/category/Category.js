import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router-dom';
import './Category.css'
const Category = () => {
    const arrow = <FontAwesomeIcon icon={faArrowLeft} className="left-arrow-icon" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="search-cart-icon" />
    const search = <FontAwesomeIcon icon={faSearch} className="search-cart-icon" />
    return (
        <div>

            {/* forsmall  */}
            <Container fluid className="small-category-section">
                <div className="small-category-header">
                    <Link to="/">{arrow} </Link>
                    <p>Just for you</p>
                    <div className="cart-search">
                        <Link to="/search"> <span>{search} </span></Link>
                        <Link to="/cart"> <span className="ms-3">{Cart} </span></Link>
                    </div>
                </div>

            </Container>
            <Container fluid className="categories-section">
                <Row xs="2" >
                    <Col xs="3" className="left-category">
                        <Link to="/category" className="text-decoration-none text-dark">
                            <p>Groceries</p>
                        </Link>
                        <Link to={`/category/footwear`} className="text-decoration-none text-dark"><p>Footwear</p></Link>

                        <Link to="/" className="text-decoration-none text-dark"><p>Fashions</p></Link>

                        <Link to="/" className="text-decoration-none text-dark"><p>Health & Beauty</p></Link>
                        <Link to="/" className="text-decoration-none text-dark"><p>Electronic Devices</p></Link>
                        <Link to="/" className="text-decoration-none text-dark"><p>Watches</p></Link>



                    </Col>
                    <Col xs="9" className="right-category">
                        <Outlet />

                    </Col>
                </Row>
            </Container>



        </div>
    );
};

export default Category;