import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddInventoryItem = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        //Getting input fields value
        const name = event.target.name.value;
        const email = event.target.email.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const body = event.target.description.value;
        const quantity = event.target.quantity.value;
        const img = event.target.image.value;

        const newItem = { name, email, supplier, price, body, quantity, img };

        //Add an item
        fetch('https://secret-everglades-75305.herokuapp.com/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                toast('A new item added');
                event.target.reset();
            });
    };

    return (
        <div className='container'>
            <h2 className='text-center my-5 fs-1'>Add a new item</h2>

            {/* add item form */}
            <form onSubmit={handleAddItem} className='w-50 mx-auto'>
                <input className='mb-2 w-100' type="text" name="name" placeholder='Name' required autoComplete='off' />
                <br />
                <input className='mb-2 w-100' type="email" name="email" placeholder='Email' value={user?.email} required readOnly disabled />
                <br />
                <input className='w-100' type="text" name="supplier" placeholder='Supplier' required autoComplete='off' />
                <br />
                <input className='my-2 w-100' type="text" name="price" placeholder='Price' required autoComplete='off' />
                <br />
                <textarea style={{ height: '100px' }} className='w-100' name="description" placeholder='Short Description' id="" cols="30" rows="10" required></textarea>
                <br />
                <input className='my-2 w-100' type="number" name="quantity" placeholder='Quantity' required />
                <br />
                <input className='mb-3 w-100' type="text" name="image" placeholder='Image url' required autoComplete='off' />
                <br />
                <input className='w-100 btn text-white fs-5 rounded-3 border-0 item-btn' type="submit" value="Add Item" />
            </form>
        </div >
    );
};

export default AddInventoryItem;