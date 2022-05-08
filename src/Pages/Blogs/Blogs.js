import React from 'react';

const Blogs = () => {
    return (
        <div className='container w-75'>
            <h1 className='text-center fw-bolder my-5'>QnA Section</h1>
            <div className='border border-3 border-secondary rounded-3 p-5'>

                {/* first question */}
                <div>
                    <h2>1. What is the difference between javascript and node.js?</h2>
                    <p>-- The main difference between javascript and node.js is javascript is a simple programming language, but node.js is a javascript runtime environment. Also, javascript uses on the client-side. Node.js uses on the server-side. So, javascript uses for frontend development, and node.js uses for server-side development. One of the javascript's library is react and one of the node.js's framework is express.js.</p>
                </div>

                {/* second question */}
                <div className='my-4'>
                    <h2>2. What are the differences between SQL and NoSQL databases?</h2>
                    <p>-- The differences between SQL and NoSQL databases are that SQL databases are well-structured, and the NoSQL databases are quite flexible. Also, SQL databases are vertically scalable, and on the other side, NoSQL databases are horizontally scalable. The data structure of NoSQL databases is in JSON format. SQL database's data structures in multi-row transactions. The SQL databases have a fixed plan, and the NoSQL databases have a dynamic plan.</p>
                </div>

                {/* third question */}
                <div>
                    <h2>3. What is the purpose of JWT and how does it work?</h2>
                    <p>-- JWT transmits information between two parties - client and server.  It uses for authorization purposes. JWT contains three parts in the token - header, payload and signiture. When a user log in to an application, server creates a JWT and send it to the user, and then client save the token in local storage, browser cookie or any other places. Next time when client send a request, then a copy of token is sent to the server for authentication. Then server verify JWT's signiture and give a respond to the client. By using the token user can access routes or resources which the user is allowed.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;