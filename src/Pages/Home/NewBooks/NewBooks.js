import React from 'react';
import banner from '../../../images/index.jpg';

const NewBooks = () => {
    return (
        <div className='d-md-flex justify-content-between align-items-center container my-5 '>
            <div className='w-75 me-4'>
                <h2 className='mb-5'>Good News!!!</h2>
                <p className='mb-1'>Books Stocker is coming with some amazing books. These will launch on the first week of the next month. Choose your type of book from new comers.</p>
                <p>So, wait for the surprises ...</p>
                <p>Keep updated with us</p>
                <div>
                    <a className='text-decoration-none' href="#facebook">Facebook</a>
                    <a className='text-decoration-none mx-2' href="#instagram">Instagram</a>
                    <a className='text-decoration-none' href="#twitter">Twitter</a>
                </div>
            </div>
            <img className='mt-3 rounded-3' width={500} src={banner} alt="" />
        </div>
    );
};

export default NewBooks;