import React from 'react';
import {  Col } from 'react-bootstrap';
import './Electric.css'

const Electric = (props) => {
    const { name, img, price, brand, url } = props.electric
    return (
        <Col  className="mt-3 mx-auto">
            <div className="electric-card">
                <img src={img} className="electric-img " alt="" />
                <div>
                    <p className="electric-name">{name} </p>
                    <p className="electric-price">{price}tk </p>
                    <p className="electric-price">by {brand} </p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <button className="btn-cart-electric">Purchase</button>
                    </a>
                </div>

            </div>
        </Col>
    );
};

export default Electric;