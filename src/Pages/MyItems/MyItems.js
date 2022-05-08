import React, { useState, useEffect } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import MyItem from '../MyItem/MyItem';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [addedItems, setAddedItems] = useState([]);
    const navigate = useNavigate();

    //find items with user email
    useEffect(() => {
        const getAddedItems = async () => {
            const email = user?.email;
            const url = `https://pacific-bastion-78618.herokuapp.com/myItems?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setAddedItems(data);
            }
            catch (error) {
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getAddedItems();
    }, [user]);

    //Delete items
    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://pacific-bastion-78618.herokuapp.com/inventory/${id}`;
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
        <div >
            <h2 className='text-center my-5 fs-1 text-secondary'>Your added items</h2>

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