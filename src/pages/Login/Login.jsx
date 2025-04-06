import React, { useState } from 'react'

import './Login.css'
import logo from '../../../public/netflix-logo.png'
const Login = () => {

  const [isSignIn, setIsSignIn] = useState(false)


  const handleSignUp=()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1 className="login-title">{isSignIn ? "Sign Up" : "Sign In"}</h1>
        <form action="" className="form">
          {isSignIn ? <input type="text" placeholder='Enter your name' />: ""}
          
          <input type="email" placeholder='Email' className='login-input' />
          <input type="password" placeholder='Password' className='login-input' />
          <button className='login-btn'>  {isSignIn ? "Sign Up" : "Sign In"}</button>
          <span className='forget-btn'> <a href='/' className="login-forgot">Forgot Password?</a></span>

          <div className='form-help'>
            <div className="login-remember-forgot">
              <input type="checkbox" className='login-checkbox' id='check' />
              <lable htmlFor='check' className="login-remember">Remember me</lable>
            </div>
            {isSignIn ? "" : <div className="login-new-user">
              <span className="login-new">New to Netflix? <span className="login-signup" onClick={handleSignUp} >Sign up now.</span></span>
            </div>}
            
          </div>
        </form>


      </div >
    </div >
  )
}

export default Login