import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import NewBooks from '../NewBooks/NewBooks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            <NewBooks></NewBooks>
        </div>
    );
};

export default Home;