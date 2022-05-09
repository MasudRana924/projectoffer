import React from 'react';
import useAuth from './../../../../hooks/useAuth';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../../images/apex.jpg'
import img2 from '../../../../images/bata.png'
import img3 from '../../../../images/Lotto-Logo.jpg'

const FootwearCategory = () => {
    const { HandleFilter, GenderFilter } = useAuth()
    return (
        <div>
            <Row xs="3">
                <Col>
                    <div>
                        <img src={img} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Footwear')}>Apex</button>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img2} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Footwear')}>Bata</button>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img3} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Footwear')}>Lotto</button>
                        </Link>
                    </div>
                </Col>



            </Row>
        </div>
    );
};

export default FootwearCategory;