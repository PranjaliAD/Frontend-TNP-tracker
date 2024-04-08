import React from 'react'
import './Login.css'
import './Loginjs'
// import Navbar from '../../Navbar/Navbar'

const Login = () => {
  return (
    <div>
    <div className="nav">
    </div>
    <div className="body">
    <div className='log-container' id='container'>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Reistration ID'/>
          <input type="text" placeholder='PRN no.' />
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <input type="text" placeholder='Reistration ID'/>
          <input type="password" placeholder='Password'/>
          <a href="/forgot-password">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-pannel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className='hidden' id='login'>Sign In</button>
          </div>
          <div className="toggle-pannel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className='hidden' id='register'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login