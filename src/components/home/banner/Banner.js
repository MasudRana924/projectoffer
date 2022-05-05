import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Banner.css'
import img from '../../../images/offer.webp'
import img2 from '../../../images/offer2.webp'
import img3 from '../../../images/offer3.webp'
import img4 from '../../../images/offer4.webp'
import img5 from '../../../images/offer5.webp'
import img6 from '../../../images/offer6.webp'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Slider from "react-slick";

const Banner = () => {
    const search = <FontAwesomeIcon icon={faSearch} className="cart" />
    const settings = {

        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Container fluid className="mt-1">
                <Row xs="1" md="2">
                    <Col md="3">
                        <div className="banner-card">
                            <p className="banner-title">Footwear</p>
                            <hr className="banner-hr" />
                            <p className="banner-text">Apex</p>
                            <p className="banner-text">Bata</p>
                            <p className="banner-text">Lotto</p>
                            <p className="banner-title-two">Fashion</p>
                            <hr className="banner-hr" />
                            <p className="banner-text">Yellow</p>
                            <p className="banner-text">Richman</p>
                            <p className="banner-text">Catseye</p>
                            <p className="banner-text">Zara</p>
                            <p className="banner-text">Easy</p>

                            <p className="banner-title-two">Grocery</p>
                            <hr className="banner-hr" />
                            <Link to="/groceryproduct" className="text-decoration-none text-dark">
                                <p className="banner-text">Chaldal</p>
                            </Link>
                            <p className="banner-text">Daraz</p>
                            <p className="banner-text">Ajker deal</p>
                        </div>
                    </Col>
                    <Col md="9">

                        <Carousel className="carousel-section">
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src={img2}
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img3}
                                    alt="Third slide"
                                />

                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img4}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img5}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img6}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>


            </Container>


            {/* forsmalldevices */}
            <div className="small-device-banner">
                <div className="header-small-device">

                    <div className="input-section">
                        <span className="input-section-search"> {search}</span>
                        <Link to="/searchh">
                            <input type="text" placeholder='Search in here' />
                        </Link>
                    </div>
                </div>
                <Slider {...settings}>
                    <div>
                        <img src={img} alt="" className="small-img" />
                    </div>
                    <div>
                        <img src={img2} alt="" className="small-img" />
                    </div>
                    <div>
                        <img src={img3} alt="" className="small-img" />
                    </div>
                    <div>
                        <img src={img4} alt="" className="small-img " />
                    </div>
                    <div>
                        <img src={img5} alt="" className="small-img" />
                    </div>
                    <div>
                        <img src={img6} alt="" className="small-img " />
                    </div>
                </Slider>
            </div>

        </div>
    );
};

export default Banner;