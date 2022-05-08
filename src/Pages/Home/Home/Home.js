import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import NewBooks from '../NewBooks/NewBooks';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            <NewBooks></NewBooks>
            <Review></Review>
        </div>
    );
};

export default Home;