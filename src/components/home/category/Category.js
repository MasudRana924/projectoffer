import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router-dom';
import img from '../../../../src/images/grocery.png'
import img2 from '../../../../src/images/foot.png'
import img3 from '../../../../src/images/fashion.png'
import img4 from '../../../../src/images/healthy.png'
import img5 from '../../../../src/images/electronics.png'
import img6 from '../../../../src/images/watches.png'
import img7 from '../../../../src/images/baby.png'
import img8 from '../../../../src/images/home.png'
import img9 from '../../../../src/images/sports.png'
import './Category.css'
const Category = () => {
    const arrow = <FontAwesomeIcon icon={faArrowLeft} className="cate-left-arrow-icon" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cate-search-cart-icon" />
    const search = <FontAwesomeIcon icon={faSearch} className="cate-search-cart-icon" />
    return (
        <div>

            {/* forsmall  */}
            <Container fluid className="small-category-section">
                <div className="small-category-header">
                    <Link to="/">{arrow} </Link>
                    <p>Just for you</p>
                    <div className="cart-search">
                        <Link to="/searchh" className="text-decoration-none "> <span className="">{search} </span></Link>
                        <Link to="/cart" className="text-decoration-none"> <span className="ms-3">{Cart} </span></Link>
                    </div>
                </div>

            </Container>
            <Container fluid className="categories-section">
                <Row xs="2" >
                    <Col xs="3" className="left-category">
                        <Link to="/category" className="text-decoration-none text-dark">
                            <div className="cateogry-card">
                                <img src={img} alt="" className="cateogry-card-img" />
                                <p>Groceries</p>
                            </div>

                        </Link>
                        <Link to={`/category/footwear`} className="text-decoration-none text-dark">
                            <div className="cateogry-card">
                                <img src={img2} alt="" className="cateogry-card-img" />
                                <p>Footwear</p>
                            </div>
                        </Link>

                        <Link to={`/category/fashions`} className="text-decoration-none text-dark">
                            <div className="cateogry-card">
                                <img src={img3} alt="" className="cateogry-card-img" />
                                <p>Fashions</p>
                            </div>
                        </Link>

                        <Link to={`/category/health`}  className="text-decoration-none text-dark">
                            <div className="cateogry-card">
                                <img src={img4} alt="" className="cateogry-card-img" />
                                <p>Health & Beauty</p>
                            </div>
                        </Link>
                        <Link to={`/category/electronics`} className="text-decoration-none text-dark">
                            <div className="cateogry-card mt-3 pt-3">
                                <img src={img5} alt="" className="cateogry-card-img" />
                                <p>Electronics</p>
                            </div>
                        </Link>

                        <Link to={`/category/watches`}  className="text-decoration-none text-dark">
                            <div className="cateogry-card mt-5">
                                <img src={img6} alt="" className="cateogry-card-img" />
                                <p>Watches</p>
                            </div>
                        </Link>
                        <Link to={`/category/baby`}  className="text-decoration-none text-dark">
                            <div className="cateogry-card mt-3">
                                <img src={img7} alt="" className="cateogry-card-img" />
                                <p>Babies & Toys</p>
                            </div>
                        </Link>
                        <Link to={`/category/home`}  className="text-decoration-none text-dark">
                            <div className="cateogry-card mt-5">
                                <img src={img8} alt="" className="cateogry-card-img" />
                                <p>Home & Lifestyle</p>
                            </div>
                        </Link>
                        <Link to={`/category/sports`}  className="text-decoration-none text-dark">
                            <div className="cateogry-card mt-5">
                                <img src={img9} alt="" className="cateogry-card-img" />
                                <p>Sports & Motorbike</p>
                            </div>
                        </Link>



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