import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
const FilterProduct = (props) => {
    const { name, img, price } = props.filterProduct
    const heart = <FontAwesomeIcon icon={faHeart} className="cart-icon" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
    return (
        <Col className="mt-3">
            <div className="product-card">
                {/* <img src={`data:image/png;base64,${img}`}alt="" className="card-img" /> */}
                <img src={img} alt="" className="card-img" />
                <h6>{name}</h6>
                <p className="price">Cost {price}tk/kg</p>
                <div className="w-50 mx-auto d-flex">
                    <button className="btn-add-heart">{heart}</button>
                    <button className="btn-add-cart">{Cart} </button>
                </div>
            </div>

        </Col>
    );
};

export default FilterProduct;