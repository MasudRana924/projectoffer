import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FindCategoryItems = (props) => {
    const { _id, name, img, price, url,brand } = props.catProduct
    return (
        <Col className="mt-3 ">
            {
                url ? <a href={url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark" >
                    <div className="card-product">
                        <img src={img} className="w-75 mx-auto card-image" alt="" />
                        <p className="card-title mt-3">{name.slice(0, 20)}</p>
                        <p className="price-text"> {price}TK</p>

                        {
                            brand ? <p className="brand-text">Brand : {brand}</p> : null
                        }
                    </div>
                </a> : <Link to={`/details/${_id}`} className="text-decoration-none text-dark" >
                    <div className="card-product">
                        <img src={img} className="w-75 mx-auto card-image" alt="" />
                        <p className="card-title mt-3">{name}</p>
                        <p className="price-text">{price}TK</p>
                        {
                            brand ? <p className="brand-text">Brand : {brand}</p> : null
                        }
                    </div>
                </Link>
            }

        </Col>
    );
};

export default FindCategoryItems;