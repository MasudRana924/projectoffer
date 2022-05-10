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
                        
                    </div>
                }
                 {
                    categoryName === 'Bata' && <div className="category-dropdown">

                        <div className="category-item">
                            <button className="category-item-btn" onClick={() => HandleFilter('Bata')}>All</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('BataMenshoes')}>Mens</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('BataWomenshoes')}>Womens</button>

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
                    </div>
                }
                {
                    categoryName === 'Shirt' && <div className="category-dropdown">
                        <div className="category-brand-item">

                            <button className="category-item-btn " onClick={() => HandleFilter('Shirt')}>All Brand</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('YellowShirt')}>Yellow</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('RichmanShirt')}>Richman</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('EasyShirt')}>Easy</button>

                        </div>
                    </div>
                }
                {
                    categoryName === 'Phone' && <div className="category-dropdown">
                        <div className="category-brand-item">

                            <button className="category-item-btn " onClick={() => HandleFilter('Phone')}>All Brand</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('ApplePhone')}>Apple</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('SamsungPhone')}>Samsung</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('VivoPhone')}>Vivo</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('OppoPhone')}>Oppo</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('RealmePhone')}>Realme</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('TechnoPhone')}>Techno</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('RedmiPhone')}>Redmi</button>

                        </div>
                    </div>
                }
                {
                    categoryName === 'Laptop' && <div className="category-dropdown">
                        <div className="category-brand-item">

                            <button className="category-item-btn " onClick={() => HandleFilter('Laptop')}>All Brand</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('AppleMacBook')}>Apple</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('DellLaptop')}>Dell</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('HpLaptop')}>HP</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('AcerLaptop')}>Acer</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('LenovoLaptop')}>Lenovo</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('AsusLaptop')}>Asus</button>
                           
                        </div>
                    </div>
                }
                  {
                    categoryName === 'TV' && <div className="category-dropdown">
                        <div className="category-brand-item">

                            <button className="category-item-btn " onClick={() => HandleFilter('TV')}>All Brand</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('SonyTV')}>Sony</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('SamsungTV')}>Samsung</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('LGTV')}>LG</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('WaltonTV')}>Walton</button>
                        </div>
                    </div>
                }
                {
                    categoryName === 'Camera' && <div className="category-dropdown">
                        <div className="category-brand-item">

                            <button className="category-item-btn " onClick={() => HandleFilter('Camera')}>All Brand</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('CanonCamera')}>Canon</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('NikonCamera')}>Nikon</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('SonyCamera')}>Sony</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('FujifilmCamera')}>Fujifilm</button>
                            <button className="category-item-btn" onClick={() => BrandFilter('GoproCamera')}>GoPro</button>
                        </div>
                    </div>
                }
                 {
                    categoryName === 'Titan' && <div className="category-dropdown">
                        <div className="category-brand-item">

                            <button className="category-item-btn " onClick={() => HandleFilter('Titan')}>All Titan</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('TitanMens')}>Mens</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('TitanWomens')}>Womens</button>
                           
                        </div>
                    </div>
                }
                {
                    categoryName === 'Rolex' && <div className="category-dropdown">
                        <div className="category-brand-item">

                            <button className="category-item-btn " onClick={() => HandleFilter('Rolex')}>All Rolex</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('RolexMens')}>Mens</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('RolexWomens')}>Womens</button>
                           
                        </div>
                    </div>
                }
                   {
                    categoryName === 'Casio' && <div className="category-dropdown">
                        <div className="category-brand-item">

                            <button className="category-item-btn " onClick={() => HandleFilter('Casio')}>All Casio</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('CasioMens')}>Mens</button>
                            <button className="category-item-btn" onClick={() => GenderFilter('CasioWomens')}>Womens</button>
                           
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