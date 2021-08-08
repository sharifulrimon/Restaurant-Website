import React from 'react';
import FoodItem from '../FoodItem/FoodItem';
import Foods from '../Foods/Foods';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopBanner from '../../Header/TopBanner';

const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
             <Foods/>
            
            <Footer/>
        </div>
    );
};

export default Home;