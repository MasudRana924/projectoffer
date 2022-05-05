import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../../../hooks/useAuth';
import img from '../../../../images/shirts.png'
import img2 from '../../../../images/pant.png'
import img3 from '../../../../images/polo.png'
import img4 from '../../../../images/tshirts.png'

const FashionsCategory = () => {
    const { HandleFilter } = useAuth()
    return (
        <div>
            <Row xs="3">
                <Col>
                    <div>
                        <img src={img} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Shirt')}>Shirts</button>
                            </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img2} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Pant')}>Pants</button>
                            </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img3} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Polo')}>Polo-Tshirt</button>
                            </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img4} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Tshirt')}>Tshirt</button>
                            </Link>
                    </div>
                </Col>
                


            </Row>
        </div>
    );
};

export default FashionsCategory;