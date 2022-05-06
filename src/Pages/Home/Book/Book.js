import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Book.css';

const Book = ({ book }) => {
    const { _id, img, name, body, supplier, price, quantity } = book;
    const navigate = useNavigate();

    //Navigation to inventory
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='single-book'>
            <img className='w-100' src={img} alt="" />
            <div className='p-2'>
                <h2>{name}</h2>
                <h3>Supplier: {supplier}</h3>
                <p>{body}</p>
                <h4>Quantity: {quantity}</h4>
                <h3>Price: ${price}</h3>
                <button onClick={() => navigateToInventory(_id)} className='btn btn-primary rounded-3 border-0 w-100 my-2 py-2'>Stock Update</button>
            </div>
        </div>
    );
};

export default Book;