import React from 'react';
import { Container, Row ,Col,Button,Form} from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './LognIn.css'
import useAuth from './../../../hooks/useAuth';
import Footer from './../../shared/Footer/Footer';

const LognIn = () => {
    const { setLoading, error, handleEmail, handlePass, setError, logInUser, email, pass } = useAuth()
    const location = useLocation();
    const navigate = useNavigate()
    return (
        <Container fluid className="mt-3">
        <Row xs={1} md={3}>
            <Col md={4}></Col>
            <Col md={4}>
                <div className="login-card">
                    <Button type="submit" className="w-75 mx-auto text-center fs-6 mt-3" size="sm" variant="success">
                        Google Login
                    </Button>
                    <Button type="submit" className="w-75 mx-auto text-center fs-6 mt-3" size="sm" variant="info">
                        Facebook Login
                    </Button>
                    
                    <Form className="w-75 mx-auto" onSubmit={(e) => {
                        e.preventDefault()

                       logInUser(email, pass)
                            .then(result => {
                                const destination = location?.state?.from || '/';
                                navigate(destination);
                                setError('')
                            })
                            .catch(error => {
                                setError('Email or Password is not valid')
                            })
                            .finally(() =>
                                setLoading(false)
                            );

                    }}>
                        <Form.Group className="" controlId="formBasicEmail">
                            <p className="text-start text-white">Email </p>
                            <Form.Control type="email" placeholder="Enter your email" onBlur={handleEmail}/>
                        </Form.Group>
                        <Form.Group className="form-input-section"controlId="formBasicPassword">
                            <p className="text-start text-white">Password</p>
                            <Form.Control type="password" placeholder="Enter your password" onBlur={handlePass}/>
                            <p className="text-start text-danger"> {error}</p>
                        </Form.Group>
                       
                        <div className="pb-3">

                            <Button type="submit" className="w-100 text-center fs-6 mt-3 " size="sm" variant="dark">
                                Log-in
                            </Button>
                        </div>
                        <p className="text-start mt-1 pb-3 account-text">Don't have an account ? 
                                    <Link to="/signup" className="text-decoration-none">Signup</Link>
                                </p>
                    </Form>
                </div>

            </Col>
            <Col md={4}></Col>
        </Row>
        <Footer></Footer>
    </Container>
    );
};

export default LognIn;