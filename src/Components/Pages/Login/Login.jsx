// with login and register toggle

// import React, { useState } from 'react';
// import './Login.css'
// import './Loginjs'
// import Navbar from '../../Navbar/Navbar'

// const Login = () => {

//   return (
//     <div>
//       <div className="nav">
//       </div>
//       <div className="body">
//         <div className='log-container' id='container'>
//           <div className="form-container sign-up">
//             <form>
//               <h1>Create Account</h1>
//               <input type="text" placeholder='Name' />
//               <input type="text" placeholder='Reistration ID' />
//               <input type="text" placeholder='PRN no.' />
//               <input type="email" placeholder='Email' />
//               <input type="password" placeholder='Password' />
//               <button>Sign Up</button>
//             </form>
//           </div>
//           <div className="form-container sign-in">
//             <form>
//               <h1>Sign In</h1>
//               <input type="text" placeholder='Reistration ID' />
//               <input type="password" placeholder='Password' />
//               <a href="#">Forget Your Password?</a>
//               <button>Sign In</button>
//             </form>
//           </div>
//           <div className="toggle-container">
//             <div className="toggle">
//               <div className="toggle-pannel toggle-left">
//                 <h1>Welcome Back!</h1>
//                 <p>Enter your personal details to use all of site features</p>
//                 <button className='hidden' id='login'>Sign In</button>
//               </div>
//               <div className="toggle-pannel toggle-right">
//                 <h1>Hello, Friend!</h1>
//                 <p>Register with your personal details to use all of site features</p>
//                 <button className='hidden' id='register'>Sign Up</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React,{useEffect} from 'react';
import './Login.css';
import Nav from '../../Navbar/Nav'

const Login = () => {
    useEffect(() => {
      const container = document.getElementById('container');
      const registerBtn = document.getElementById('register');
      const loginBtn = document.getElementById('login');
  
      registerBtn.addEventListener('click', () => {
        container.classList.add('active');
      });
  
      loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
      });
  
      return () => {
        registerBtn.removeEventListener('click', () => {
          container.classList.add('active');
        });
        loginBtn.removeEventListener('click', () => {
          container.classList.remove('active');
        });
      };
    }, []);

  return (
    <div>
      <div className="nav"><Nav/></div>
      
      <div className="login-body">
        <div className='log-container' id='container'>
          <div className="form-container sign-up">
            <form>
              <h3>I am an Instructor..</h3>
              <h1>Sign In</h1>
              <input type="text" placeholder='Instructor ID' />
              <input type="password" placeholder='Password' />
              <button className='change'>Sign In</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form>
            <h3>I am a Student..</h3>
              <h1>Sign In</h1>
              <input type="text" placeholder='Reistration ID' />
              <input type="text" placeholder='PRN No.' />
              <input type="password" placeholder='Password' />
              <a href="#">Forget Your Password?</a>
              <button className='change'>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-pannel toggle-left">
                <h1>Hello Friend!</h1>
                <p>Are you a student & want to use all site features? Login as student by clicking here</p>
                <button className='change hidden' id='login'>Student Login</button>
              </div>
              <div className="toggle-pannel toggle-right">
              <h1>Hello, want to sign in as Instructor ?</h1>
                <p>Login as instructor with your personal details by clicking here and use all of site features</p>
                <button className='change hidden' id='register'>Instructor Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login