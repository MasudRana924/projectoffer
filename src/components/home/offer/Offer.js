import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/apexoffer.webp'
import img2 from '../../../images/apexoffer2.webp'
import img3 from '../../../images/bataoffer.webp'
import img4 from '../../../images/bataoofer2.webp'
import './Offer.css'

const Offer = () => {
    return (
        <Container fluid className="mt-5">

            <Row xs="1" md="3">
                <Col className="mt-3">
                    <a href="https://www.apex4u.com/" target="_blank" rel="noopener noreferrer">
                        <img src={img} alt="" className="offerimg-left " />
                    </a>
                </Col>
                <Col className="mt-3">
                    <Row xs="1">
                        <Col>
                            <img src={img2} alt="" className="img-fluid" />
                        </Col>
                    </Row>
                    <Row className="mt-1" xs="1">
                        <Col>
                            <img src={img3} alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </Col>
                <Col className="mt-3">
                    <img src={img4} alt="" className="offerimg-right " />
                </Col>
            </Row>


        </Container>
    );
};

export default Offer;