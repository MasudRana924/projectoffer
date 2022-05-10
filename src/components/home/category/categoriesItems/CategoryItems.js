import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import FindCategoryItems from './FindCategoryItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, faCartPlus, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './CategoryItems.css'

const CategoryItems = () => {
    const { categoryProduct, categoryName, GenderFilter, HandleFilter, BrandFilter } = useAuth()
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
                    categoryName === 'Apex' && <div className="category-dropdown">

                        <div className="category-item">
                            <button className="category-item-btn" onClick={() => HandleFilter('Apex')}>All</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('ApexMenshoes')}>Mens</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('ApexWomenshoes')}>Womens</button>

                        </div>


                        <div className="category-brand-item">

                            <button className="category-item-btn" onClick={() => BrandFilter('Apex')}>Apex</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Bata')}>Bata</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Lotto')}>Lotto</button>

                        </div>
                    </div>
                }
                 {
                    categoryName === 'Bata' && <div className="category-dropdown">

                        <div className="category-item">
                            <button className="category-item-btn" onClick={() => HandleFilter('Bata')}>All</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('BataMenshoes')}>Mens</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('BataWomenshoes')}>Womens</button>

                        </div>


                        <div className="category-brand-item">

                            <button className="category-item-btn" onClick={() => BrandFilter('Apex')}>Apex</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Bata')}>Bata</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Lotto')}>Lotto</button>

                        </div>
                    </div>
                }
                 {
                    categoryName === 'Lotto' && <div className="category-dropdown">

                        <div className="category-item">
                            <button className="category-item-btn" onClick={() => HandleFilter('Lotto')}>All</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('LottoMenshoes')}>Mens</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('LottoWomenshoes')}>Womens</button>

                        </div>


                        <div className="category-brand-item">

                            <button className="category-item-btn" onClick={() => BrandFilter('Apex')}>Apex</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Bata')}>Bata</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Lotto')}>Lotto</button>

                        </div>
                    </div>
                }
                {
                    categoryName === 'Shirt' && <div className="category-dropdown">

                        <div className="category-item">
                            <button className="category-item-btn" onClick={() => HandleFilter('Shirt')}>All</button>
                            <button className="category-item-btn" onClick={() => HandleFilter('Shirt')}>Shirt</button>
                            <button className="category-item-btn" onClick={() => HandleFilter('Pant')}>Pant</button>
                            <button className="category-item-btn" onClick={() => HandleFilter('Tshirt')}>T-shirt</button>
                            <button className="category-item-btn" onClick={() => HandleFilter('Polo')}>Polo</button>
                        </div>


                        <div className="category-brand-item">

                            <button className="category-item-btn" onClick={() => HandleFilter('Shirt')}>All Brand</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Yellow')}>Yellow</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Richman')}>Richman</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('Easy')}>Easy</button>

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