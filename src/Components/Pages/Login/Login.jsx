
// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';
// import Nav from '../../Navbar/Nav';

// // axios.defaults.baseURL = 'https://dp1d9vc7-5000.inc1.devtunnels.ms/api/Student';
// axios.defaults.baseURL = 'https://placement-internship-tracker-backend.vercel.app/api/Student';

// const Login = () => {
//   const [data, setData] = useState({
//     regId: "",
//     prnNo: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//       prnNo: data.prnNo,
//     };
//     axios.post('/', userData)
//       .then((response) => {
//         console.log(response.data); 
//         const studentsJSON = JSON.stringify(response.data);
//         localStorage.setItem('studentsData', studentsJSON);
//         // Set cookie properly
//         // document.cookie = token=`${response.data.token}`;
//         // Redirect
//         window.open('/studlogin', '_self');
//       })
//       .catch((error) => {
//         console.error('Error logging in:', error);
//         // Handle error
//       });
//   };

//   return (
//     <div>
//       <div className="nav"><Nav/></div>
//       <div className="login-body">
//         <div className='log-container' id='container'>
//           <div className="form-container">
//             <h3>Student Login</h3>
//             <h1>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="regId">
//                 Reg ID
//                 <input
//                   type="text"
//                   name="regId"
//                   value={data.regId}
//                   onChange={handleChange}
//                 />
//               </label>
//               <label htmlFor="prnNo">
//                 PRN No
//                 <input
//                   type="text"
//                   name="prnNo"
//                   value={data.prnNo}
//                   onChange={handleChange}
//                 />
//               </label>
//               <label htmlFor="password">
//                 Password
//                 <input
//                   type="password"
//                   name="password"
//                   value={data.password}
//                   onChange={handleChange}
//                 />
//               </label>
//               <div className="btn-container">
//               <button className='btn' type="submit">Login</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

