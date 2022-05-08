import React from 'react';
import banner from '../../../images/index.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='d-md-flex justify-content-between align-items-center container my-5 banner'>
            <div className='banner-header'>
                <h1 className='mb-4'>Books Stocker!!!</h1>
                <p>Welcome to the storehouse of knowledge. Are you a book lover? Then this place is for you. Join us, stock your favourite books and boost your knowledge level one more step.</p>
            </div>
            <img className='mt-3 rounded-3' width={500} src={banner} alt="" />
        </div>
    );
};

export default Banner;