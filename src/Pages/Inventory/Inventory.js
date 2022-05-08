import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const Inventory = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [itemQuantity, setItemQuantity] = useState(0);

    //Load book data with id
    useEffect(() => {
        const url = `https://secret-everglades-75305.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [itemQuantity]);

    let { img, name, supplier, body, quantity, price } = book;

    //Decrease item quantity
    const decreaseQuantity = () => {
        if (quantity === 0) {
            toast('Item is stocked out');
            return;
        }
        const newQuantity = quantity - 1;
        quantity = newQuantity;
        const updatedQuantity = { quantity };

        const url = `https://secret-everglades-75305.herokuapp.com/inventory/${id}`;
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
                toast('Item delivered successfully');
            });
    };

    //Increase item quantity
    const increaseQuantity = event => {
        event.preventDefault();
        const inputQuantity = event.target.quantity.value;

        if (!inputQuantity) {
            toast('Please give a restock number');
            return;
        }

        const newQuantity = quantity + parseInt(inputQuantity)
        quantity = newQuantity;
        const updatedQuantity = { quantity };
        const url = `https://secret-everglades-75305.herokuapp.com/inventory/${id}`;
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
    };


    return (
        <div>
            {/* show item with id */}
            <div className='d-md-flex justify-content-center align-items-center container'>
                <div className='single-book w-50 m-5'>
                    <img className='w-100' src={img} alt="" />
                    <div className='py-4 px-2'>
                        <h2>{name}</h2>
                        <h4>Supplier: {supplier}</h4>
                        <p>{body}</p>
                        <div className='d-flex justify-content-between'>
                            <h4>Quantity: {itemQuantity ? itemQuantity : quantity}</h4>
                            <input onClick={decreaseQuantity} className='btn btn-primary border-0' type="submit" value="Delivered" />
                        </div>
                        <h3>Price: ${price}</h3>
                    </div>
                </div>

                {/* Item restock section */}
                <div className='border border-2 border-secondary rounded-3 m-5 p-3 w-md-25 h-50'>
                    <h4 className='text-center'>Restock items</h4>
                    <form onSubmit={increaseQuantity}>
                        <input className='my-4 ms-4 w-75' placeholder='Restock number' type="number" name="quantity" />
                        <br />
                        <input className='btn btn-primary mx-auto w-100' type="submit" value="Stock" />
                    </form>
                </div>
            </div>

            {/* ManageInventory btn */}
            <Link to='/manageInventories'><button className='btn btn-primary border-0 my-5 py-2 rounded-3 fs-5 manage-btn'>Manage Inventories</button></Link>
        </div>
    );
};

export default Inventory;