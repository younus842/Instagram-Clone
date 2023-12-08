import React, { useState } from 'react'
import "./Authentication.css"
import Login from './Login';
import Signup from './Signup';


function Authentication() {
  
  const [active, setActive] = useState("login")

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login")
  }

  return (
    <div className="authentication">
      
       <div className="auth__left">
       <img  className='image1' src="https://imgur.com/P3Vm1Kq.png" alt="" />
      </div>
      <div className='auth__right'> 
      
     {active === "login" ? (<Login/>) : (<Signup/>) } 

     <div className='s__more'>
      <span>
      {active === "login" ? 
      (<>Don't have an account? <button onClick={handleChange}>Sign Up</button></>) : 
      (<>Have an account? <button onClick={handleChange}>Sign In</button></>)}
      </span>
  
         </div> 
         </div> 
      </div>
    
  )
}

export default Authentication
