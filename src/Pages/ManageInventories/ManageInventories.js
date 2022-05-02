import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            });
    }, []);
    return (
        <div>
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
            <div>
                {
                    books.map(book => <ManageInventory
                        key={book._id}
                        book={book}
                    ></ManageInventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;