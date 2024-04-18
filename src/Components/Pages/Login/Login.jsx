import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import Nav from '../../Navbar/Nav';
import axios from 'axios';

const Login = () => {
  const [error, setError] = useState('');

  const handleStudentLogin = (e) => {
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

    axios.post('https://placement-internship-tracker-backend-mu.vercel.app/api/student', {
      regId: regId,
      prnNo: prnNo,
      password: password
    })
    .then(response => {

      // Handle successful login
      // console.log('Login successful:', response.data);
      // eslint-disable-next-line
      window.open('/studlogin');
      // Perform necessary actions like navigating to the student dashboard
    })
    .catch(error => {
      // Handle login error
      console.error('Error logging in:', error);
      setError('Invalid credentials. Please try again.');
    });
  };
  // const handleStudentProfile = (e) => {
  //   e.preventDefault();
  //   setError('');

  //   const regId = e.target.regId.value;
  //   const prnNo = e.target.prnNo.value;
  //   const password = e.target.password.value;

  //   // Validation: Ensure all fields are filled
  //   if (!regId || !prnNo || !password) {
  //     setError('Please provide all required information.');
  //     return;
  //   }

  //   axios.post('https://placement-internship-tracker-backend-mu.vercel.app/api/student', {
  //     regId: regId,
  //     prnNo: prnNo,
  //     password: password
  //   })
  //   .then(response => {
        
  //     // Handle successful login
  //     console.log('Login successful:', response.data);
  //     window.open('./Student_profile/Profile.jsx');
  //     // Perform necessary actions like navigating to the student dashboard
  //   })
  //   .catch(error => {
  //     // Handle login error
  //     console.error('Error logging in:', error);
  //     setError('Invalid credentials. Please try again.');
  //   });
  // };

  return (
    <div>
      <div className="nav"><Nav/></div>
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
              <a href="#">Forget Your Password?</a>
              <button type="submit" className='change'>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
