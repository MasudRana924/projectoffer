import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { Spinner, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './SearchScreen.css'
import SearchScreens from './SearchScreens.js';

const SearchScreen = () => {
    const { displayProducts, products, setDisplayProducts, HandleFilter } = useAuth()

    const arrow = <FontAwesomeIcon icon={faArrowLeft} className="left-arrow-icon" />
    const searchIcon = <FontAwesomeIcon icon={faSearch} className="cart" />
    const [search, setSearch] = useState('')

    const handleSearch = event => {
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
        setDisplayProducts(matchedProducts);
        setItems(search);
    }
    const getRecent = () => {
        let list = localStorage.getItem('recent-search');
        if (list) {
            return JSON.parse(localStorage.getItem('recent-search'));
        } 

    }
    const [items, setItems] = useState(getRecent());
    console.log(items)


    useEffect(() => {
        localStorage.setItem('recent-search', JSON.stringify(items));
    }, [items])


    return (
        <Container fluid className="mt-5">
            <div className="search-section-small">
                <Link to="/">{arrow} </Link>
                <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSearch} className="search-btn">{searchIcon}</button>

            </div>
            {
                items ? < div className="suggestion-section">
                    <p>Recent search</p>
                    <div className="suggestion-btn-section">
                        <button className="recent-btn">
                            <p>{items}</p>
                        </button>
                    </div>
                </div> : null
            }

            <div className="suggestion-section">
                <p>Suggestion</p>
                <div className="suggestion-btn-section">
                    <button className="suggestion-btn" onClick={() => HandleFilter('Phone')}>
                        <p className="text-btn">Phone</p>
                    </button>
                    <button className="suggestion-btn" onClick={() => HandleFilter('TV')}>
                        <p>Tv</p>
                    </button>
                    <button className="suggestion-btn" onClick={() => HandleFilter('MacBook')}>
                        <p>MacBook</p>
                    </button>
                </div>


            </div>


            <Row xs="2" md="4" className="mt-5">
                {displayProducts.length === 0 ? < div className="w-25 mx-auto spinner">Loading <Spinner animation="border" className="spinner" />
                </div>

                    :
                    displayProducts.map(groceryProduct => <SearchScreens
                        groceryProduct={groceryProduct}
                        key={groceryProduct._id}
                    ></SearchScreens>)
                }



            </Row>
        </Container >
    );
};

export default SearchScreen;