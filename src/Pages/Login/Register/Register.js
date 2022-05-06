import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    let errorMessage;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    //User registration
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    //Show error
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    //Show spinner
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-md-5 my-3 border border-3 border-secondary rounded-3 mx-auto p-5 register-form'>
            <h2 className='text-center mb-5'>Please Register</h2>

            {/* Registration form */}
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your name" required autoComplete='off' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required autoComplete='off' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-75 ms-5 mt-3' variant="primary" type="submit">
                    Register
                </Button>
            </Form>

            {/* navigate to login */}
            <p className='mt-4'>Already have an account? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
            {errorMessage}

            {/* Social login */}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;