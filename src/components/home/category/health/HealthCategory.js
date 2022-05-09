import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import img from '../../../../images/mens.png'
import img2 from '../../../../images/womens.png'
import img3 from '../../../../images/makeup.svg'
import img4 from '../../../../images/medical.jpg'

const HealthCategory = () => {
    const { HandleFilter } = useAuth()
    return (
        <div>
            <Row xs="3">
                <Col>
                    <div>
                        <img src={img} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Mens')}>Men's Care</button>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img2} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Womens')}>Women's Care</button>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img3} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Makeup')}>Makeup</button>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img4} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Medical')}>Medical Care</button>
                        </Link>
                    </div>
                </Col>



            </Row>
        </div>
    );
};

export default HealthCategory;