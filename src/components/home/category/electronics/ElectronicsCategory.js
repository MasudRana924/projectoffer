import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../../images/phone.png'
import img2 from '../../../../images/mac.png'
import img3 from '../../../../images/laptop.png'
import img4 from '../../../../images/tv.png'
import img5 from '../../../../images/camera.png'
import useAuth from './../../../../hooks/useAuth';
const ElectronicsCategory = () => {
    const { HandleFilter } = useAuth()
    return (
        <div>
            <Row xs="3">
                <Col>
                    <div>
                        <img src={img} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Phone')}>Phone</button>
                            </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img2} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('MacBook')}>MacBook</button>
                            </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img3} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Laptop')}>Laptop</button>
                            </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img4} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('TV')}>TV</button>
                            </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img5} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Camera')}>Camera</button>
                            </Link>
                    </div>
                </Col>
                


            </Row>
        </div>
    );
};

export default ElectronicsCategory;