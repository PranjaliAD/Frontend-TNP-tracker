import React, { useEffect, useState } from 'react';
import './StudLogin.css';
import Nav from '../../Navbar/Nav';
import axios from 'axios';

const Login = () => {
  const [error, setError] = useState('');

  const handleInstructorLogin = (e) => {
    e.preventDefault();
    setError('');

    const instructoremailId = e.target.emailId.value;
    const password = e.target.password.value;

    // Validation: Ensure all fields are filled
    if (!instructoremailId ||  !password) {
      setError('Please provide all required information.');
      return;
    }

    axios.post('https://placement-internship-tracker-backend-mu.vercel.app/api/instructor', {
      instructoremailId: instructoremailId,
      password: password
    })
    .then(response => {
      window.open('/instlogin');
    })
    .catch(error => {
      // Handle login error
      console.error('Error logging in:', error);
      setError('Invalid credentials. Please try again.');
    });
  };
  
  return (
    <div>
      <div className="nav"><Nav/></div>
      <div className="login-body">
        <div className='log-container' id='container'>
          <div className="form-container sign-in">
            <form onSubmit={handleInstructorLogin}>
              <h3>I am a Instructor..</h3>
              <h1>Sign In</h1>
              <input type="text" id="instructoremailId" placeholder='Email ID' />
              <input type="password" id="password" placeholder='Password' />
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className='change'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;