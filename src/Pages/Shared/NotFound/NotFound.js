import React from 'react';
import notFound from '../../../images/notFound.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='w-50 mx-auto mt-5 not-found'>
            <h4 className='text-center fw-normal'>Oops!!!</h4>
            <h3 className='text-center fw-normal'>The page you are looking for is not found</h3>
            <h2 className='text-center fs-1'>404</h2>
            <img className='ms-5' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;