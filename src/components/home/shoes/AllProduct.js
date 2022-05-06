import React from 'react';
import { Container, Row,  } from 'react-bootstrap';
import './AllProduct.css'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useAuth from '../../../hooks/useAuth';
import AllProducts from './AllProducts';

const AllProduct = () => {
    const {products}=useAuth()
    return (
        <Container fluid className="mt-5">
             <div className="grocery-header">
                <div>
                    <p className="grocery-title">Just For You</p>
                </div>
                
            </div>
            <Row xs="2" md="4">
           
                 {
                     products.map(product=><AllProducts
                     product={product}
                     
                     ></AllProducts>)
                 }
        
            </Row>


        </Container>
    );
};

export default AllProduct;