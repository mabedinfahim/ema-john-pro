import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';


const auth=getAuth(app)
const Header = () => {
    // const [user,setUser]=useState()

    // useEffect(()=>{
    //     onAuthStateChanged(auth,user=>{
    //         if(user){
    //             setUser(user)
    //         }
    //     })
    // },[])
    const [user]=useAuthState(auth)

    const handelWithSignOut=()=>{
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user? <button onClick={handelWithSignOut} className="text-white pl-4 hover:text-yellow-600 text-[17px]">Sign out</button>:<Link to="/sign-in">Sign In</Link>}
                <Link to="/sign-up">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;