import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Category.css'
const Category = () => {
    const arrow = <FontAwesomeIcon icon={faArrowLeft} className="left-arrow-icon" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="search-cart-icon"  />
    const search = <FontAwesomeIcon icon={faSearch} className="search-cart-icon" />
    return (
        <div>

            {/* forsmall  */}
            <Container fluid className="small-category-section">
                <div className="small-category-header">
                    
                        <Link to="/">{arrow} </Link>
                        <p>Just for you</p>
                    
                    <div className="cart-search">
                        <Link to="/search"> <span>{search} </span></Link>
                        <Link to="/cart"> <span className="ms-3">{Cart} </span></Link>
                       
                        
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Category;