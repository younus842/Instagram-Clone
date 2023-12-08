import React, { useState } from 'react'
import "./Login.css"

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);

  }

  return (
    <div className="login">

      

      
      <img className="auth__logo" src="https://i0.wp.com/www.christinasandsengen.com/wp-content/uploads/2014/09/instagram-logo-black-on-white.png?resize=300%2C114&ssl=1" alt="Logo"></img>

      <input type='email' id='username' placeholder='Email Here' onChange={(e)=> setEmail(e.target.value)} value = {email}/>
      <input type='password' id='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)} value = {password}/>
      <button className='auth__signin' onClick={handleLogin}>Sign In</button>

    </div>
    
  )
}

export default Login