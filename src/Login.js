import React, { useEffect, useState } from 'react'
import "./Login.css";
import { auth,provider } from './databaseFiles/firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
    const [value,setValue]=useState('');
    const signIn=() => {
        // signInWithPopup(auth,provider).then((data)=>{
        // setValue(data.user.email);
        // localStorage.setItem("email",data.user.email);
        // )
    };
    
  return (
    <div className='login'>
        <img className='whatsapp-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png'></img>
        <div className='sign-in-text'>
            <h2>Sign in to WhatsApp</h2>
            <button onClick={signIn} className='sign-in-btn' type='submit'>Sign In with Google</button>
        </div>
    </div>
  )
}

export default Login