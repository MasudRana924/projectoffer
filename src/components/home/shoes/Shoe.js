import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const Shoe = (props) => {
    const {_id, name, price, img, stock, url, brand } = props.shoe
    const view = <FontAwesomeIcon icon={faEye} className="view-icon" />
    const [action,setAction]=useState(1)
    const viewRef = useRef()
   const handlePurchase=(e)=>{
    const view = viewRef.current.value
   
   
    const product = {view }
    fetch('https://obscure-badlands-58635.herokuapp.com/addproduct', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Product added succesfully')
                e.target.reset()
            }
        })
    e.preventDefault()
   }
    return (
        <Col className="mt-3 ">
            <div className="card-shoes">
                {/* <p className="stock">{stock}</p> */}
                <img src={img} className="w-75 mx-auto card-image" alt="" />
                <h5 className="card-title mt-3">{name}</h5>
                <p className="price-text">Price : {price}TK</p>
                <div className="brand">
                    {
                        brand? <p className="price-text">Brand : {brand}</p>:null
                    }
                   
                    {/* <button className="view-btn">{view} {action} </button> */}
                </div>

                {
                url ? <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="btn-cart" >See Details</button>
                </a>
                    :
                    <Link to={`/details/${_id}`} className="text-decoration-none text-dark"><button className="btn-cart" >See Details</button>
                    </Link> 
            }

            </div>

        </Col>
    );
};

export default Shoe;