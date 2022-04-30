import React from 'react';
import banner from '../../../images/index.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='d-flex justify-content-between align-items-center container my-5 banner'>
            <div className='w-50'>
                <h1 className='mb-4'>Book Stocker!!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam, unde, ipsa distinctio obcaecati harum esse in dicta numquam, magnam quae odio hic. Rem, eos libero unde perferendis blanditiis quasi?</p>
            </div>
            <img className='mt-3 rounded-3' width={500} src={banner} alt="" />
        </div>
    );
};

export default Banner;