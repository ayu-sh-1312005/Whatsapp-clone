import React, { useEffect, useState } from 'react'
import "./Login.css";
import { auth,provider } from './databaseFiles/firebase';
import { signInWithPopup } from 'firebase/auth';

function Login(props) {
    const [value,setValue]=useState(null);
    const [getUrl,setUrl]=useState("");
    const signIn=() => {
        signInWithPopup(auth,provider).then((result)=>{
            const user=result.user;
            setValue(user);
        }).catch((error)=>{
            alert(error.message);
        })
    };
    useEffect(()=>{
        props.valid(value);
        console.log(value);
        if(value){
           console.log(value.photoURL);
           props.setUrl(value.photoURL);
        }
    },[value]);
    
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