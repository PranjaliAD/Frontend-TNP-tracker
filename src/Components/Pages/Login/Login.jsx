import React, { useState } from 'react';
import './Login.css';
// import Nav from '../../Navbar/Nav';
import axios from 'axios';

const Login = () => {
  const [error, setError] = useState('');

  const handleStudentLogin = async (e) => {
    e.preventDefault();
    setError('');

    const regId = e.target.regId.value;
    const prnNo = e.target.prnNo.value;
    const password = e.target.password.value;

    // Validation: Ensure all fields are filled
    if (!regId || !prnNo || !password) {
      setError('Please provide all required information.');
      return;
    }

    try {
      const response = await axios.post('https://dp1d9vc7-5000.inc1.devtunnels.ms/api/Student/', {
        regId,
        prnNo,
        password
      });
      console.log(response.body.data);

      // Assuming the backend returns a token upon successful login
      const token = response.body.data;
      localStorage.setItem('token', token); // Save token to local storage

      window.location.href = '/studlogin'; // Redirect to desired page
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      {/* <div className="nav"><Nav/></div> */}
      <div className="login-body">
        <div className='log-container' id='container'>
          <div className="form-container sign-in">
            <form onSubmit={handleStudentLogin}>
              <h3>I am a Student..</h3>
              <h1>Sign In</h1>
              <input type="text" id="regId" placeholder='Registration ID' />
              <input type="text" id="prnNo" placeholder='PRN No.' />
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
