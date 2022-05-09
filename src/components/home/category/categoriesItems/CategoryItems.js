import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import FindCategoryItems from './FindCategoryItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, faCartPlus, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './CategoryItems.css'

const CategoryItems = () => {
    const { categoryProduct, categoryName, GenderFilter, HandleFilter,BrandFilter } = useAuth()
    const arrow = <FontAwesomeIcon icon={faArrowLeft} className="cate-left-arrow-icon" />
    const downArrow = <FontAwesomeIcon icon={faArrowDown} className="cate-down-arrow-icon" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cate-search-cart-icon" />
    const search = <FontAwesomeIcon icon={faSearch} className="cate-search-cart-icon" />

    return (
        <div className="">
            {/* forsmall devices */}
            <div fluid className="small-category-section">
                <div className="small-category-header">
                    <Link to="/category">{arrow} </Link>
                    <p>{categoryName}</p>
                    <div className="cart-search">
                        <Link to="/searchh" className="text-decoration-none "> <span className="ms-3 ps-3">{search} </span></Link>
                        <Link to="/cart" className="text-decoration-none"> <span className="ms-3">{Cart} </span></Link>
                    </div>
                </div>

            </div>
            <div>
                {
                    categoryName === 'Footwear' && <div className="category-dropdown">

                        <div className="category-item">
                            <button className="category-item-btn" onClick={() => HandleFilter('Footwear')}>All</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('Menshoes')}>Mens</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('Womenshoes')}>Womens</button>

                        </div>


                        <div className="category-brand-item">
                       
                            <button className="category-item-btn" onClick={() => HandleFilter('Footwear')}>All Brand</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Apex')}>Apex</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Bata')}>Bata</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Lotto')}>Lotto</button>

                        </div>
                    </div>
                }
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