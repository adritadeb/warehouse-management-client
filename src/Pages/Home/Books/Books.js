import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([]);

    //load books data
    useEffect(() => {
        fetch('https://secret-everglades-75305.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            });
    }, []);
    const slicedBooks = books.slice(0, 6);
    return (
        <div id='books' className='container'>
            <h2 className='text-center heading mt-5 mb-4'>Books</h2>
            <div className='books'>
                {
                    slicedBooks.map(book => <Book
                        key={book._id}
                        book={book}
                    ></Book>)
                }
            </div>

            {/* ManageInventory btn */}
            <Link to='/manageInventories'><button className='btn btn-primary border-0 my-5 py-2 rounded-3 fs-5 manage-btn'>Manage Inventories</button></Link>
        </div>
    );
};

export default Books;