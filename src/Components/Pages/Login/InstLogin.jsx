// import React, { useEffect, useState } from 'react';
// import './StudLogin.css';
// import Nav from '../../Navbar/Nav';
// import axios from 'axios';

// const Login = () => {
//   const [error, setError] = useState('');

//   const handleInstructorLogin = (e) => {
//     e.preventDefault();
//     setError('');

//     const instructoremailId = e.target.emailId.value;
//     const password = e.target.password.value;

//     // Validation: Ensure all fields are filled
//     if (!instructoremailId ||  !password) {
//       setError('Please provide all required information.');
//       return;
//     }

//     axios.post('https://placement-internship-tracker-backend-mu.vercel.app/api/instructor', {
//       instructoremailId: instructoremailId,
//       password: password
//     })
//     .then(response => {
//       window.open('/instlogin');
//     })
//     .catch(error => {
//       // Handle login error
//       console.error('Error logging in:', error);
//       setError('Invalid credentials. Please try again.');
//     });
//   };
  
//   return (
//     <div>
//       {/* <div className="nav"><Nav/></div> */}
//       {/* <div className="login-body">
//         <div className='log-container' id='container'>
//           <div className="form-container sign-in"> */}
//             <form onSubmit={handleInstructorLogin}>
//               <h3>I am a Instructor..</h3>
//               <h1>Sign In</h1>
//               <input type="text" id="instructoremailId" placeholder='Email ID' />
//               <input type="password" id="password" placeholder='Password' />
//               {error && <div className="error-message">{error}</div>}
//               <button type="submit" className='change'>Login</button>
//             </form>
//           {/* </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import './InstLogin.css';
// import axios from 'axios';
// import Cookies from 'js-cookie'; // Import Cookies

// const InstLogin = () => {
//   const [error, setError] = useState('');

//   const handleInstructorLogin = (e) => {
//     e.preventDefault();
//     setError('');

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     // Validation: Ensure all fields are filled
//     if (!email || !password) {
//       setError('Please provide all required information.');
//       return;
//     }

//     axios.post('https://placement-internship-tracker-backend-mu.vercel.app/api/instructor/login', {
//       email: email,
//       password: password
//     })
//     .then(response => {
//       // Store instructor data in cookies
//       Cookies.set('instructor', response.data.instructor); // Assuming response.data.instructor contains the instructor data
//       window.open('/instlogin');
//     })
//     .catch(error => {
//       // Handle login error
//       console.error('Error logging in:', error);
//       setError('Invalid credentials. Please try again.');
//     });
//   };
  
//   return (
//     <div>
//             <div className="form-container">
//             <form onSubmit={handleInstructorLogin}>
//               <h3>I am an Instructor..</h3>
//               <h1>Sign In</h1>
//               <input type="email" id="email" placeholder='Email' />
//               <input type="password" id="password" placeholder='Password' />
//               {error && <div className="error-message">{error}</div>}
//               <button type="submit" className='change'>Login</button>
//             </form>
//             </div>
//     </div>
//   );
// }

// export default InstLogin;
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
        // document.cookie = token=`${response.data.token}`;
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