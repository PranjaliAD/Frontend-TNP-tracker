import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InstLogin from './InstLogin';
import StudLogin from './StudLogin'
import './Login.css';
import Nav from '../../Navbar/Nav';

const Login = () => {
  

  return (
    <div>
      <div className="nav"><Nav/></div>
      <div className="login-body">
        <div className='log-container' id='container'>
          <StudLogin/>
          <InstLogin/>
        </div>
      </div>
    </div>
  );
}

export default Login;

