import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Menu.css'
import img from '../../../images/apex.jpg'
import img2 from '../../../images/bata.png'
import img3 from '../../../images/Lotto-Logo.jpg'
import img4 from '../../../images/yellow.png'
import img5 from '../../../images/Zara-Emblem.jpg'
import img6 from '../../../images/Richman.png'


const Menu = () => {
    return (
        <div>
            <Container fluid className="featured-brand mt-5">
                <h2 className="text-start  feature-brand-title">FEATURED BRAND </h2>

                <Row xs="1" md="3">
                    <Col className="mt-3">
                        <div className="menu-div">
                            <img src={img} alt="" className="menu-img" />
                            <img src={img2} alt="" className="menu-img" />
                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div className="menu-div">
                            <img src={img3} alt="" className="menu-img" />
                            <img src={img4} alt="" className="menu-img" />

                        </div>

                    </Col>
                    <Col className="mt-3">
                        <div className="menu-div">
                            <img src={img5} alt="" className="menu-img" />
                            <img src={img6} alt="" className="menu-img" />

                        </div>

                    </Col>
                </Row>
            </Container>

         {/* forsmall devices */}
            <Container fluid className="featured-brand-small mt-5">
                <h2 className="text-start  feature-brand-title">FEATURED BRAND </h2>

                <Row xs="1" >
                    <Col className="mt-1">
                    <div className="menu-div">
                            <img src={img} alt="" className="menu-img" />
                            <img src={img2} alt="" className="menu-img" />
                            <img src={img3} alt="" className="menu-img" />
                       </div>
                    </Col>
                  
                    <Col className="mt-1">
                        <div className="menu-div">
                        <img src={img4} alt="" className="menu-img" />
                            <img src={img5} alt="" className="menu-img" />
                            <img src={img6} alt="" className="menu-img" />

                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Menu;