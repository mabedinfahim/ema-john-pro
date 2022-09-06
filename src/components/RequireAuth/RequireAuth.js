import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';

const auth=getAuth(app)
const RequireAuth = ({children}) => {
    const [user,loading]=useAuthState(auth);
    const location=useLocation();
    if(loading){
        return <h1 className="text-4xl text-center pt-20">Loading...</h1>
    }
    if(!user){
        return <Navigate to="/sign-in" state={{from:location}} replace/>
    }
    return children;
};

export default RequireAuth;