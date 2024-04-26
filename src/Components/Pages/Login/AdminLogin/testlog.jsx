import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import Nav from '../../Navbar/Nav';

// axios.defaults.baseURL = 'https://dp1d9vc7-5000.inc1.devtunnels.ms/api/Student';
axios.defaults.baseURL = 'https://placement-internship-tracker-backend.vercel.app/api/Instructor';

const Login = () => {
  const [data, setData] = useState({
    instructoremailId: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      instructoremailId: data.instructoremailId,
    };
    axios.post('', userData)
      .then((response) => {
        console.log(response.data); 
        const InstructorJSON = JSON.stringify(response.data);
        localStorage.setItem('instructorsData', InstructorJSON);
        // Set cookie properly
        // document.cookie = token=${response.data.token};
        // Redirect
        window.open('/instlogin', '_self');
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        // Handle error
      });
  };

  return (
    <div>
      <div className="nav"><Nav/></div>
      <div className="login-body">
        <div className='log-container' id='container'>
          <div className="form-container">
            <h3>Instructor Login</h3>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="instructoremailId">
               instructoremailId
                <input
                  type="text"
                  name="instructoremailId"
                  value={data.instructoremailId}
                  onChange={handleChange}
                />
              </label>
            
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;