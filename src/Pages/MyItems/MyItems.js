import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setBooks(data);
            }
            catch (error) {
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getMyItems();
    }, [user]);
    return (
        <div>
            {
                books.map(book => <p>{book.name}</p>)
            }
            <h2>My Items page</h2>
        </div>
    );
};

export default MyItems;