import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GroceryScreens from './GroceryScreens';
import Header from './../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import useAuth from './../../../hooks/useAuth';



const GroceryScreen = () => {
    const { groceryProduct } = useAuth()
  
    return (
        <>
            <Header></Header>
            <Container fluid className="">

                <Row md="2">
                    <Col md="2">
                       
                    </Col>
                    <Col md="10">
                        <Row xs="1" md="4">

                            {
                                groceryProduct.map(groceryProduct => <GroceryScreens
                                    groceryProduct={groceryProduct}
                                    key={groceryProduct._id}
                                ></GroceryScreens>)
                            }
                        </Row>

                    </Col>
                </Row>



            </Container>
            <Footer></Footer>
        </>
    );
};

export default GroceryScreen;