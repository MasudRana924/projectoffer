import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Modal, Row, Button, Spinner, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../shared/Footer/Footer';
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Details = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const arrow = <FontAwesomeIcon icon={faArrowLeft} className="" />
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)

            })
    }, [])


    return (
        <div>


            {/* small devices */}

            <Container fluid className="mt-3">
                <Row xs="1">
                    <Col className="">
                        <div className="details-card">
                            <img src={product.img} className="details-img" alt="" />
                            <h2 className="details-title">{product.name}</h2>
                            <p className="details-price">Price : {product.price}Tk / kg  </p>
                            <p className="details-desc"> {product.desc}</p>
                            <button className="details-btn" >Buy Now</button>

                        </div>
                        <div>

                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="details-footer">
                <Link to="/searchh" className="text-decoration-none ">
                <button className="btn-arrow">{arrow} Back</button></Link>
                <button className="btn-buy-now">Buy Now</button>
                <button className="btn-add-to-cart">Add to Cart</button>

            </div>

        </div>
    );
};

export default Details;