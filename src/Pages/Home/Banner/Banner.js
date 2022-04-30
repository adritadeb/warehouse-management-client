import React from 'react';
import banner from '../../../images/index.jpg';

const Banner = () => {
    return (
        <div className='d-flex'>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam, unde, ipsa distinctio obcaecati harum esse in dicta numquam, magnam quae odio hic. Rem, eos libero unde perferendis blanditiis quasi?</p>
            </div>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;