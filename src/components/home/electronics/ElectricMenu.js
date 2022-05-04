import React from 'react';
import { Container } from 'react-bootstrap';
import './ElectricMenu.css'
import { Link } from 'react-router-dom';
import Electrics from './electric/Electrics';

const ElectricMenu = () => {
    return (
        <Container fluid className="mt-5">
            <div className="electronic-menu">
                <Link to="/" className="text-decoration-none text-dark">
                   <p>Electric</p>
                </Link>
                <Link to="/phones" className="text-decoration-none text-dark">
                   <p className="phones">Phones</p>
                </Link>
                <Link to="/computer" className="text-decoration-none text-dark">
                   <p className="computer">Computers</p>
                </Link>
                <Link to="/TV" className="text-decoration-none text-dark">
                   <p className="tv">TV</p>
                </Link>
                <Link to="/refrigerator" className="text-decoration-none text-dark">
                   <p className="refrigerator">Refrigerator</p>
                </Link>
            </div>
            <Electrics></Electrics>

        </Container>
    );
};

export default ElectricMenu;