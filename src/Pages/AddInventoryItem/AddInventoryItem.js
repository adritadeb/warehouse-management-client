import React from 'react';
import { toast } from 'react-toastify';

const AddInventoryItem = () => {

    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const body = event.target.description.value;
        const quantity = event.target.quantity.value;
        const img = event.target.image.value;

        const newItem = { name, supplier, price, body, quantity, img };

        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                toast('item added');
                event.target.reset();
            });
    };

    return (
        <div className='container'>
            <h2 className='text-center my-4'>Add a new item</h2>
            <form onSubmit={handleAddItem} className='w-50 mx-auto'>
                <input className='mb-2 w-100' type="text" name="name" placeholder='Name' required />
                <br />
                <input className='w-100' type="text" name="supplier" placeholder='Supplier' required />
                <br />
                <input className='my-2 w-100' type="text" name="price" placeholder='Price' required />
                <br />
                <textarea style={{ height: '100px' }} className='w-100' name="description" placeholder='Short Description' id="" cols="30" rows="10" required></textarea>
                <br />
                <input className='my-2 w-100' type="number" name="quantity" placeholder='Quantity' required />
                <br />
                <input className='mb-3 w-100' type="text" name="image" placeholder='image url' required />
                <br />
                <input className='w-100 btn btn-primary rounded-3' type="submit" value="Add Item" />
            </form>
        </div >
    );
};

export default AddInventoryItem;