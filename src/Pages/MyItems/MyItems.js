import React, { useState, useEffect } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import MyItem from '../MyItem/MyItem';
import { Table } from 'react-bootstrap';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [addedItems, setAddedItems] = useState([]);

    //find items with user email
    useEffect(() => {
        const getAddedItems = () => {
            const email = user?.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            try {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        setAddedItems(data)
                    })
            }
            catch (error) {
                console.log(error.message)
            }
        }
        getAddedItems();
    }, [user]);

    //Delete items
    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingData = addedItems.filter(addedItem => addedItem._id !== id);
                    setAddedItems(remainingData);
                })
        }
    };

    return (
        <div>
            <h2 className='text-center my-5'>Your added items</h2>

            {/* Table header */}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Supplier</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </Table>
            {
                addedItems.map(addedItem => <MyItem
                    key={addedItem._id}
                    addedItem={addedItem}
                    handleDeleteItem={handleDeleteItem}
                ></MyItem>)
            }
        </div>
    );
};

export default MyItems;