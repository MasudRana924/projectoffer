import React from 'react';
import { Col } from 'react-bootstrap';

const Grocerries = (props) => {
    const { name, price, img, stock, url, brand } = props.grocery
    return (
        <Col xs="12" className="mt-3">
            <div className="grocery-card">
                <div className="grocery-card-left-section">
                    <img src={img} alt="" className="grocery-img  " />
                </div>

                <div className="grocery-card-right-section">
                    <h2 className="grocery-name ">{name}</h2>
                    <p className="grocery-price ">price : {price}</p>
                    <p className="grocery-price ">by {brand}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <button className="btn-cart-grocery">Purchase</button>
                    </a>
                </div>




            </div>

        </Col>
    );
};

export default Grocerries;