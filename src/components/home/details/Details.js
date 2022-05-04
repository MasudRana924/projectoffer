import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Modal, Row, Button, Spinner, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../shared/Footer/Footer';
import './Details.css'

const Details = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)

            })
    }, [])

    
    return (
        <>
            <Container fluid className="mt-5">
                {/* small devices */}
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
            <Footer></Footer>
        </>
    );
};

export default Details;