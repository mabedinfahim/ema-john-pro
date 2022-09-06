
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCguJvSHtl8XydySd8d6tTF3DuubOIDRIM",
  authDomain: "ema-john-pro-527aa.firebaseapp.com",
  projectId: "ema-john-pro-527aa",
  storageBucket: "ema-john-pro-527aa.appspot.com",
  messagingSenderId: "880739107382",
  appId: "1:880739107382:web:75152ad3cfb8373a0f8e97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;