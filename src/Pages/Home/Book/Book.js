import React from 'react';
import './Book.css';

const Book = ({ book }) => {
    const { img, name, body, supplier, price, quantity } = book;
    return (
        <div className='single-book'>
            <img className='w-100' src={img} alt="" />
            <div className='p-2'>
                <h2>{name}</h2>
                <h3>Supplier: {supplier}</h3>
                <p>{body}</p>
                <h4>Quantity: {quantity}</h4>
                <h3>Price: ${price}</h3>
            </div>
        </div>
    );
};

export default Book;