import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory';

//load all books data
const ManageInventories = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            });
    }, []);

    //Delete items
    const handleDeleteBook = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingData = books.filter(book => book._id !== id);
                    setBooks(remainingData);
                })
        }
    };

    return (
        <div>
            <h2 className='text-center my-5'>Manage Inventories</h2>

            {/* Table header */}
            <Table className='container-fluid' striped bordered hover size="sm">
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
            <div>
                {
                    books.map(book => <ManageInventory
                        key={book._id}
                        book={book}
                        handleDeleteBook={handleDeleteBook}
                    ></ManageInventory>)
                }
            </div>

            {/* AddInventory btn */}
            <Link to='/addInventoryItem'><button className='btn btn-primary border-0 my-5 py-2 rounded-3 fs-5 manage-btn'>Add Inventory Item</button></Link>
        </div>
    );
};

export default ManageInventories;