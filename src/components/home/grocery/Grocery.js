import React, {useState,useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import './Grocery.css'
import Grocerries from './Grocerries';

const Grocery = () => {
    const [groceries, setGrocery] = useState([])

    useEffect(() => {
        fetch('./grocery.json')
            .then(res => res.json())
            .then(data => {
                setGrocery(data)
            })
    }, [])
    return (
       
        <Container fluid className="mt-5">
            <div className="grocery-header">
                <div>
                    <p className="grocery-title">Grocery - Best Seller </p>
                </div>
                <div className="grocery-brand-section">
                   <p className="grocery-brand">Daraz</p>
                   <p className="grocery-brand">Ajker Deal</p>
                   <p className="grocery-brand">Chaldal</p>
                </div>
            </div>

            <Row xs="1" md="3">
                 {
                     groceries.map(grocery=><Grocerries
                        grocery={grocery}
                     ></Grocerries>)
                 }
            </Row>
        </Container>
       
    );
};

export default Grocery;