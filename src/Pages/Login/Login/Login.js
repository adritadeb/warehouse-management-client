import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    let errorMessage;

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email');
        }
    }

    if (user) {
        navigate('/home');
    }

    if (error || error1) {
        errorMessage = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    return (
        <div className='my-5 border border-3 border-secondary rounded-3 w-50 mx-auto p-5'>
            <h2 className='text-center mb-5'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" autoComplete='off' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-75 ms-5 mt-3' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-4'>Forgot Password? <button onClick={handleResetPassword} className='btn btn-link text-decoration-none'>Reset Password</button></p>
            <p className='mt-4'>New to Books Stocker? <Link className='text-decoration-none' to='/register'>Please Register</Link></p>
            {errorMessage}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;