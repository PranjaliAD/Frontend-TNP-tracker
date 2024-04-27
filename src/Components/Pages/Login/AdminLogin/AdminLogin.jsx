// import React, { useEffect, useState } from 'react';
// import './AdminLogin.css';
// // import Nav from '../../Navbar/Nav';
// import axios from 'axios';

// const Login = () => {
//   const [error, setError] = useState('');

//   const handleAdminLogin = (e) => {
//     e.preventDefault();
//     setError('');

//     const emailId = e.target.emailId.value;
//     const password = e.target.password.value;

//     // Validation: Ensure all fields are filled
//     if (!emailId ||  !password) {
//       setError('Please provide all required information.');
//       return;
//     }

//     axios.post('https://placement-internship-tracker-backend-mu.vercel.app/api/adminLogin', {
//       emailId: emailId,
//       password: password
//     })
//     .then(response => {
//       window.open('/admin');
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
//       <div className="login-body">
//         <div className='log-container' id='container'>
//           <div className="form-container sign-in">
//             <form onSubmit={handleAdminLogin}>
//               <h3>Admin Login</h3>
//               <h1>Sign In</h1>
//               <input type="text" id="emailId" placeholder='Email ID' />
//               <input type="password" id="password" placeholder='Password' />
//               {error && <div className="error-message">{error}</div>}
//               <button type="submit" className='change'>Login</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
// login.jsx
import React, { useState } from 'react';
import './AdminLogin.css';
import axios from 'axios';
// import Nav from '../../Navbar/Nav';

// axios.defaults.baseURL = 'https://dp1d9vc7-5000.inc1.devtunnels.ms/api/Student';
// axios.defaults.baseURL = 'https://placement-internship-tracker-backend.vercel.app/api/adminLogin';

const AdminLogin = () => {
  const [data, setData] = useState({
    adminemailId: "",
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
    const admindata = {
      adminemailId: data.adminemailId,
    };
    axios.post(`https://placement-internship-tracker-backend.vercel.app/api/adminLogin`, admindata)
      .then((response) => {
        console.log(response.data); 
        const AdminJSON = JSON.stringify(response.data);
        localStorage.setItem('adminData', AdminJSON);
        // Set cookie properly
        // document.cookie = token=${response.data.token};
        // Redirect
        window.open('/admin', '_self');
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        // Handle error
      });
  };

  return (
    <div>
      {/* <div className="nav"><Nav/></div> */}
      <div className="login-body">
        <div className='log-container' id='container'>
          <div className="form-container">
            <h3>Admin Login</h3>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="adminemailId">
               adminemailId
                <input
                  type="text"
                  name="adminemailId"
                  value={data.adminemailId}
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

export default AdminLogin;