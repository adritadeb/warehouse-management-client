import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    if (user?.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center'>
            <h3 className='text-danger mt-3'>Your email is not verified</h3>
            <h5 className='text-success'>Please verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent verification email');
                }}>Send verification email again</button>
        </div>
    }

    return children;
};

export default RequireAuth;