import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../../images/titan.png'
import img2 from '../../../../images/rolex.png'
import img3 from '../../../../images/casio.png'

const WatchesCategory = () => {
    const { HandleFilter } = useAuth()
    return (
        <div>
            <Row xs="3">
                <Col>
                    <div>
                        <img src={img} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Titan')}>Titan</button>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img2} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Rolex')}>Rolex</button>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={img3} alt="" className="cat-img" />
                        <Link to='/findcategory'>
                            <button className="cat-btn" onClick={() => HandleFilter('Casio')}>Casio</button>
                        </Link>
                    </div>
                </Col>



            </Row>
        </div>
    );
};

export default WatchesCategory;