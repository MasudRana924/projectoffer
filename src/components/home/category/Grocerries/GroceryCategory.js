import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './GroceryCategory.css'
import img from '../../../../images/bnner.webp'
import img2 from '../../../../images/fruits.jpg'
import img3 from '../../../../images/5.webp'
import img4 from '../../../../images/3.webp'
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const GroceryCategory = () => {
    const { HandleFilter } = useAuth()
    return (
        <div>
            <Row xs="3">
                <Col>
                    <div>
                        <img src={img} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Vegitable')}>Vegitable</button>
                            </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img2} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Fruits')}>Fruits</button>
                            </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img3} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Fish')}>Fishes</button>
                            </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img4} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Meat')}>Meat</button>
                            </Link>
                    </div>
                </Col>


            </Row>
        </div>
    );
};

export default GroceryCategory;