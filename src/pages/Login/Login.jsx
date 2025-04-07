import React, { useState } from 'react'

import './Login.css'
import logo from '../../../public/netflix-logo.png'
import { login, signup } from '../../firebase'
const Login = () => {

  const [isSignIn, setIsSignIn] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user_auth = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert("Please fill all fields")
      return
    }
    if (isSignIn) {
      await signup(name, email, password)
    } else {
      await login(email, password)
    }
    setEmail("")
    setPassword("")
    setName("")
  }

  const handleSignUp = () => {
    setIsSignIn(!isSignIn)
  }
  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1 className="login-title">{isSignIn ? "Sign Up" : "Sign In"}</h1>
        <form action="" className="form">
          {isSignIn ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' /> : <></>}

          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='login-input' />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='login-input' />
          <button className='login-btn' onClick={user_auth} type='submit'>  {isSignIn ? "Sign Up" : "Sign In"}</button>
          {isSignIn ? "" : <span className='forget-btn'> <a href='/' className="login-forgot">Forgot Password?</a></span>}

          <div className='form-help'>
            <div className="login-remember-forgot">
              <input type="checkbox" className='login-checkbox' id='check' />
              <lable htmlFor='check' className="login-remember">Remember me</lable>
              <p className='para'>Need Help?</p>
            </div>
            {isSignIn ? <div className="login-new-user">
              <span className="login-new">Already have account? <span className="login-signup" onClick={handleSignUp} >Sign In now.</span></span>
            </div> : <div className="login-new-user">
              <span className="login-new">New to Netflix? <span className="login-signup" onClick={handleSignUp} >Sign up now.</span></span>
            </div>}

          </div>
        </form>


      </div >
    </div >
  )
}

export default Login