import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let errorMessage;

    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/home');
    }

    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div className='my-5 border border-3 border-secondary rounded-3 w-50 mx-auto p-5'>
            <h2 className='text-center mb-5'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-75 ms-5 mt-3' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-4'>Already have an account? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
            {errorMessage}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;