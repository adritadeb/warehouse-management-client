import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const Inventory = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, []);

    const { img, name, supplier, body, quantity, price } = book;

    const [itemQuantity, setItemQuantity] = useState('');

    const increaseQuantity = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const updatedQuantity = { quantity };

        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                setItemQuantity(updatedQuantity.quantity);
                toast('Item stocked successfully');
                event.target.reset();
            });
    }


    return (
        <div>
            <div className='d-flex justify-content-center align-items-center container'>
                <div className='single-book w-25 m-5'>
                    <img className='w-100' src={img} alt="" />
                    <div className='py-4 px-2'>
                        <h2>{name}</h2>
                        <h4>Supplier: {supplier}</h4>
                        <p>{body}</p>
                        <div className='d-flex justify-content-between'>
                            <h4>Quantity: {
                                itemQuantity ? itemQuantity : quantity
                            }</h4>
                            <input className='btn btn-primary border-0' type="submit" value="Delivered" />
                        </div>
                        <h3>Price: ${price}</h3>
                    </div>
                </div>
                <div className='border border-2 border-secondary rounded-3 m-5 p-3 w-25 h-50'>
                    <h4 className='text-center'>Restock the items</h4>
                    <form onSubmit={increaseQuantity}>
                        <input className='my-4 ms-4 w-75' placeholder='Put a number' type="number" name="quantity" />
                        <br />
                        <input className='btn btn-primary mx-auto w-100' type="submit" value="Stock" />
                    </form>
                </div>
            </div>
            <Link to='/manageInventories'><button className='btn btn-primary border-0 w-50 my-3 py-2 rounded-3 fs-5 manage-btn'>Manage Inventories</button></Link>
        </div>
    );
};

export default Inventory;