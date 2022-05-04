import React from 'react';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import './GroceryCategory.css'
import img from '../../../../images/bnner.webp'
import img2 from '../../../../images/fruits.jpg'
import img3 from '../../../../images/5.webp'
import img4 from '../../../../images/3.webp'

const GroceryCategory = () => {
   
        return (
            <div>
                <Row xs="3">
                    <Col>
                        <div>
                            <img src={img} alt="" className="cat-img" />
                            <button className="cat-btn">Vegitable</button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={img2} alt="" className="cat-img" />
                            <button className="cat-btn">Fruits</button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={img3} alt="" className="cat-img" />
                            <button className="cat-btn">Fishes</button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={img4} alt="" className="cat-img" />
                            <button className="cat-btn">Meat</button>
                        </div>
                    </Col>

                    
                </Row>
            </div>
        );
    };

export default GroceryCategory;