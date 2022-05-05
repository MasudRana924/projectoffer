import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FindCategoryItems = (props) => {
    const { _id, name, img, price, url } = props.catProduct
    return (
       
        <Col>
            <div className="search-product-card">
                {/* <img src={`data:image/png;base64,${img}`}alt="" className="card-img" /> */}
                <img src={img} alt="" className="card-img" />
                <p>{name}</p>
                <p className="price">Cost {price}tk/kg  </p>


                {
                    url ? <a href={url} target="_blank" rel="noopener noreferrer">
                        <button className="btn-cart" >See Details</button>
                    </a>
                        :
                        <Link to={`/details/${_id}`} className="text-decoration-none text-dark"><button className="btn-cart" >See Details</button>
                        </Link>
                }


            </div>

        </Col>
    );
};

export default FindCategoryItems;