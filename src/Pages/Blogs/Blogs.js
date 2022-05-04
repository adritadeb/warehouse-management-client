import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>QnA Section</h1>
            <h2>1. What is the difference between javascript and node.js?</h2>
            <p>-- The main difference between javascript and node.js is javascript is a simple programming language, but node.js is a javascript runtime environment. Also, javascript uses on the client-side. Node.js uses on the server-side. So, javascript uses for frontend development, and node.js uses for server-side development.</p>
            <h2>2. What are the differences between SQL and NoSQL databases?</h2>
            <p>-- The differences between SQL and NoSQL databases are that SQL databases are well-structured, and the NoSQL databases are quite flexible. Also, SQL databases are vertically scalable, and on the other side, NoSQL databases are horizontally scalable. The data structure of NoSQL databases is in JSON format. SQL database's data structures in multi-row transactions. The SQL databases have a fixed plan, and the NoSQL databases have a dynamic plan.</p>
        </div>
    );
};

export default Blogs;