import React, { useState } from 'react'
import "./Signup.css"
import Login from './Login';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const [name, setName] =useState("");
  const [username, setUsername] =useState("");

  const change = () => {
    createUserWithEmailAndPassword(auth, email, password).then(signInWithEmailAndPassword(auth, email, password).then(updateProfile(auth.currentUser, {displayName: username}))
    ).catch(err => {
      alert(err);
    })
  }

  {change ? (<Login />) : (<Login />)}
  
  
  return (
    
    <div className="signup">
      <div className='signu'>
      <img className="signup__logo" src="https://i0.wp.com/www.christinasandsengen.com/wp-content/uploads/2014/09/instagram-logo-black-on-white.png?resize=300%2C114&ssl=1" alt="Logo"></img>

      <p className='paralong'>Sign up to see photos and videos from your friends</p>
      <button className='s__signin'>Log in in with Facebook</button>

      <p className='parashort'>OR</p>

      <input type='email' id='username' onChange={(e)=> setEmail(e.target.value)} value = {email} placeholder='Email Here'/>

      <input type='text' placeholder='Full Name' onChange={(e)=> setName(e.target.value)} value = {name}/> 

      <input type='username' placeholder='Username' onChange={(e)=> setUsername(e.target.value)} value = {username}/>

      <input type='password' id='password' className='textfield'      placeholder='Password' onChange={(e)=> setPassword(e.target.value)} value = {password}/>

      <p className='para'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
      <button className='s__signin' onClick={change}>Sign Up</button>
      </div>
      
    </div>
        )
      }

export default Signup