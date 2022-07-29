import React from 'react';
import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';


const auth=getAuth(app)
const SignUp = () => {
    const [createUserWithEmailAndPassword,user,error]=useCreateUserWithEmailAndPassword(auth)
    const [signInWithGoogle]=useSignInWithGoogle(auth)

    const [email,setEmail]=useState("")
    const handelWithEmail=(event)=>{
        setEmail(event.target.value)
    }

    const [password,setPassword] = useState("")
    const handelWithPassword=(event)=>{
        setPassword(event.target.value)
    }

    const [confirmPassword,setConfirmPassword]=useState("")
    const handelWithConfirmPassword=(event)=>{
        setConfirmPassword(event.target.value)
    }

    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/shop"
    const handelWithSubmit=(e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            return;
        }
        createUserWithEmailAndPassword(email,password)
        .then(()=>{
            navigate(from,{replace:true})
        })
    }

    return (
        <div className="flex justify-center items-center py-10">
            <div className="w-[350px] border border-gray-200 bg-white shadow-md rounded-md px-10 py-6">
                <h1 className="text-2xl font-bold text-gray-500 text-center">Sign Up</h1>
                <form action="" onSubmit={handelWithSubmit}>
                    <label>Email</label>
                    <br />
                    <input onBlur={handelWithEmail} className=' border my-2 border-gray-500 w-full px-4 py-1 rounded-md bg-gray-100 text-black' type="email" name="email" placeholder='Enter your email address'id="" />
                    <label>Password</label>
                    <br />
                    <input onBlur={handelWithPassword} className=' border my-2 border-gray-500 w-full px-4 py-1 rounded-md bg-gray-100 text-black' type="password" name="password" placeholder='Enter your password'id="" />
                    <label>Confirm Password</label>
                    <br />
                    <input onBlur={handelWithConfirmPassword} className=' border my-2 border-gray-500 w-full px-4 py-1 rounded-md bg-gray-100 text-black' type="password" name="password" placeholder='Confirm your password'id="" />
                    <p className="text-red-500">{error}</p>
                    <input className=' my-2 w-full px-4 py-1 rounded-md bg-yellow-500 text-white text-md font-bold' type="submit" value="Sign Up" />
                    <p className='text-center'>Already you have an account? <Link className='text-yellow-500' to="/sign-in">Sign In</Link></p>
                    <div className='flex justify-between items-center'>
                        <div className='bg-gray-500 w-3/6 h-[0.5px]'></div>
                        <p className='px-6'>Or</p>
                        <div className='bg-gray-500 w-3/6 h-[0.5px]'></div>
                    </div>
                    <button onClick={()=>signInWithGoogle()} className='w-full border border-gray-300 px-4 py-2 shadow-md bg-white rounded-md text-center mt-2 flex justify-center items-center'> <img className="w-8 h-8 rounded-full mx-2" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" srcset="" /> <p>Continue with Google</p></button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
