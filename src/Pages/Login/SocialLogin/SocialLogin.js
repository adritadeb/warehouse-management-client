import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMessage;

    if (user) {
        navigate('/home');
    }

    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div>
            {errorMessage}
            <div className='d-flex align-items-center'>
                <div className='border border-1 w-50'></div>
                <p className='mt-2 mx-3'>or</p>
                <div className='border border-1 w-50'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='border-0 bg-primary text-white w-75 ms-5 p-2 rounded-2'>Google Sign In</button>
        </div>
    );
};

export default SocialLogin;