import React from 'react';
import Carts from './Carts';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { removeFromDb } from '../../../hooks/fakeDB';
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'

const Cart = () => {
    const { cart, setCart } = useAuth()
    const handleRemove = _id => {
        const newCart = cart.filter(product => product._id !== _id);
        setCart(newCart);
        removeFromDb(_id);
    }
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 75 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <>
            <Header></Header>
            <Container fluid className="">

                <Row xs="1" md="2">
                    <Col xs="12" className="">

                        {
                            cart.map(product => <Carts
                                product={product}
                                key={product._id}
                                handleRemove={handleRemove}
                            ></Carts>)
                        }
                    </Col>
                    {
                        cart ? <div>
                            <Col xs="12" className="mt-3">
                                <div className="cart-total">
                                    <h5>Order Summary</h5>
                                    <div >
                                        <p className="text-start ms-1">Total items ordered : {totalQuantity}</p>
                                        <p className="text-start ms-1">Total : {total.toFixed(2)}tk</p>
                                    </div>
                                    <div >
                                        <p className="text-start ms-1">Tax : {tax.toFixed(2)}tk</p>
                                        <p className="text-start ms-1">Shipping : {shipping.toFixed(2)}tk</p>
                                        <p className="text-start ms-1">GrandTotal : {grandTotal.toFixed(2)}tk</p>
                                    </div>
                                    <Link to="/checkout">
                                        <button className="checkOut-btn w-75 mx-auto">CheckOut</button>
                                    </Link>

                                </div>

                            </Col>
                        </div> : null
                    }

                </Row>

            </Container>
            <Footer></Footer>
        </>
    );
};
export default Cart;