import { getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth=getAuth(app)
const SignIn = () => {
    const [signInWithEmailAndPassword,user,error]=useSignInWithEmailAndPassword(auth)
    const [signInWithGoogle]=useSignInWithGoogle(auth)
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || "/"

    const [email,setEmail]=useState("")
    const handelWithEmail = (event) => {
        setEmail(event.target.value)
    }

    const [password,setPassword] = useState("")
    const handelWithPassword = (event) => {
        setPassword(event.target.value)
    }

    const handelWithSubmit=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
        navigate(from,{replace:true})
    }

    return (
        <div className="flex justify-center items-center py-10">
        <div className="w-[400px] border border-gray-200 bg-white shadow-md rounded-md px-10 py-6">
            <h1 className="text-2xl font-bold text-gray-500 text-center">Sign In</h1>
            <form action="" onSubmit={handelWithSubmit}>
                <label>Email</label>
                <br />
                <input onBlur={handelWithEmail} className=' border my-2 border-gray-500 w-full px-4 py-1 rounded-md bg-gray-100 text-black' type="email" name="email" placeholder='Enter your email address'id="" />
                <label>Password</label>
                <br />
                <input onBlur={handelWithPassword} className=' border my-2 border-gray-500 w-full px-4 py-1 rounded-md bg-gray-100 text-black' type="password" name="password" placeholder='Enter your password'id="" />
                <input className=' my-2 w-full px-4 py-1 rounded-md bg-yellow-500 text-white text-md font-bold' type="submit" value="Sign Up" />
                <p className='text-center'>New to Ema-John?<Link className='text-yellow-500' to="/sign-up"> Create new account</Link></p>
                <div className='flex justify-between items-center'>
                    <div className='bg-gray-500 w-3/6 h-[0.5px]'></div>
                    <p className='px-6'>Or</p>
                    <div className='bg-gray-500 w-3/6 h-[0.5px]'></div>
                </div>
                <button onClick={()=>signInWithGoogle()} className='pointer w-full border border-gray-300 px-4 py-2 shadow-md bg-white rounded-md text-center mt-2 flex justify-center items-center'> <img className="w-8 h-8 rounded-full mx-2" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" srcset="" /> <p>Continue with Google</p></button>
            </form>
        </div>
    </div>
    );
};

export default SignIn;