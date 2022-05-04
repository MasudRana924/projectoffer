import React from 'react';
import Banner from './banner/Banner';
import Menu from './menu/Menu';
import Offer from './offer/Offer';
import Shoes from './shoes/Shoes';
import Fashion from './fashion/Fashion';
import Grocery from './grocery/Grocery';
import ElectricMenu from './electronics/ElectricMenu';
import Header from './../shared/Header/Header';
import Footer from './../shared/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Menu></Menu>
            {/* <Offer></Offer> */}
            <Shoes></Shoes>
            {/* <Fashion></Fashion>
            <Grocery></Grocery>
            <ElectricMenu></ElectricMenu> */}
            <Footer></Footer>
           
            
        </div>
    );
};

export default Home;