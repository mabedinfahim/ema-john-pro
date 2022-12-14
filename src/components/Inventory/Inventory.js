import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth=getAuth(app)
const Inventory =() => {
    const [user]=useAuthState(auth)
    console.log(user)

    const [name,setName]=useState()
    const handelWithName=(e)=>{
        setName(e.target.value)
    }

    const [address,setAddress]=useState()
    const handelWithAddresses=(e)=>{
        setAddress(e.target.value)
    }

    const handelWithSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <div className="flex justify-center items-center py-10">
        <div className="w-[400px] border border-gray-200 bg-white shadow-md rounded-md px-10 py-6">
            <h1 className="text-2xl font-bold text-gray-500 text-center pb-4">Shipping information</h1>
            <form action="" onSubmit={handelWithSubmit}>
                <label>Your Name</label>
                <br />
                <input onBlur={handelWithName} className=' border my-2 border-gray-500 w-full px-4 py-1 rounded-md bg-gray-100 text-black' type="text" name="name" placeholder='Enter your name'id="" />
                <label>Your Email</label>
                <br />
                <input value={user.email} readonly className=' border my-2 border-gray-500 w-full px-4 py-1 rounded-md bg-gray-100 text-black' type="email" name="password" placeholder='Enter your password'id="" />
                <label>Your Phone Number</label>
                <br />
                <input className=' border my-2 border-gray-500 w-full px-4 py-1 rounded-md bg-gray-100 text-black' type="number" name="number" placeholder='Your phone number'id="" />
                <label>Addresses</label>
                <br />
                <input onBlur={handelWithAddresses} className=' border my-2 border-gray-500 w-full px-4 py-1 rounded-md bg-gray-100 text-black' type="text" name="address" placeholder='Addresses'id="" />
                <input className=' my-2 w-full px-4 py-1 rounded-md bg-yellow-500 text-white text-md font-bold' type="submit" value="Add Shipping" />
            </form>
        </div>
    </div>
);
};

export default Inventory;