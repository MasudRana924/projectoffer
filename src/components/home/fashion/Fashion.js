import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fashions from './Fashions';


const Fashion = () => {
   
    const [cloths, setCloths] = useState([])

    useEffect(() => {
        fetch('./cloths.json')
            .then(res => res.json())
            .then(data => {
                setCloths(data)
            })
    }, [])
  
    return (
        <Container fluid className="mt-5">
             <div className="grocery-header">
                <div>
                    <h2 className="grocery-title">Fashion - </h2>
                </div>
                <div className="grocery-brand-section">
                   <p className="grocery-brand">Yellow</p>
                   <p className="grocery-brand">Richman</p>
                   <p className="grocery-brand">Zara</p>
                   <p className="grocery-brand">CatsEye</p>
                </div>
            </div>
            <Row xs="2" md="4">
           
                 {
                     cloths.map(cloth=><Fashions
                     cloth={cloth}
                     ></Fashions>)
                 }
        
            </Row>


        </Container>
    );
};

export default Fashion;
