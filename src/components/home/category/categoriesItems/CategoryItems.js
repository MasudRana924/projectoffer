import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import FindCategoryItems from './FindCategoryItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const CategoryItems = () => {
    const { categoryProduct } = useAuth()
    const arrow = <FontAwesomeIcon icon={faArrowLeft} className="cate-left-arrow-icon" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cate-search-cart-icon" />
    const search = <FontAwesomeIcon icon={faSearch} className="cate-search-cart-icon" />

    return (
        <div className="">
            {/* forsmall devices */}
            <div fluid className="small-category-section">
                <div className="small-category-header">
                    <Link to="/">{arrow} </Link>
                    <p>Category</p>
                    <div className="cart-search">
                        <Link to="/searchh" className="text-decoration-none "> <span className="ms-3 ps-3">{search} </span></Link>
                        <Link to="/cart" className="text-decoration-none"> <span className="ms-3">{Cart} </span></Link>
                    </div>
                </div>

            </div>
            <Row xs="2" className="mt-1">
                {
                    categoryProduct.length === 0 ? < div className="w-100 mx-auto spinner mt-5">Products is coming...
                    </div> : 
                    categoryProduct.map(catProduct => <FindCategoryItems
                        catProduct={catProduct}
                    ></FindCategoryItems>)
                }

            </Row>
        </div>
    );
};

export default CategoryItems;