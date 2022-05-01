import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            });
    }, []);
    const slicedBooks = books.slice(0, 6);
    return (
        <div className='container'>
            <h2 className='text-center mb-4'>Books</h2>
            <div className='books ms-5'>
                {
                    slicedBooks.map(book => <Book
                        key={book._id}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;