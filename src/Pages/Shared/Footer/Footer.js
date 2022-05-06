import React from 'react';
import { Link } from 'react-router-dom';
import copyright from '../../../images/copyright.png';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='d-md-flex justify-content-evenly align-items-center mt-5'>
            <h4 className='fs-3 footer-part'>Books Stocker</h4>
            <div className='footer-copyright-part'>
                <p><small>copyright</small></p>
                <img className='mx-1 mb-3' src={copyright} alt="" />
                <p><small>{year}</small></p>
            </div>
            <div className='footer-part'>
                <Link className='text-decoration-none' to='/home'>Home</Link>
                <Link className='text-decoration-none mx-2' to='/login'>Login</Link>
                <Link className='text-decoration-none' to='/register'>Registration</Link>
            </div>
        </footer>
    );
};

export default Footer;