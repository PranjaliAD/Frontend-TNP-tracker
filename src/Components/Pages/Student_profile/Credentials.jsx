import React, { useState, useEffect } from 'react';
import './Credentials.css';
import axios from 'axios';
axios.defaults.baseURL='https://placement-internship-tracker-backend.vercel.app/api/students/?prnNo=${value}';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const Credentials = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const cookies = document.cookie;
    const value=localStorage.getItem('studentsData');
      console.log(value)

      axios.get(`https://placement-internship-tracker-backend.vercel.app/api/students/?prnNo=${value}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleContributeClick = () => {
    window.open('/studprofedit', '_blank'); 
  };

  return (
    <div className='container1'>
      {userData && (
        <>
          <h2 className='name'>{userData.student.name} </h2>
          <div className="reg">
            <h2 className='reg_id'>Registration Id:  {userData.student.regId}</h2>
            <h2 className='prn_no'>PRN no.:  {userData.student.prnNo}</h2>
          </div>
          <hr />
          <p className='description'>Description: {userData.student.instructoremailId}</p>
          <hr />
          <div className="mail-no">
            <div className="item1">
              <h4 className='h'>Email: </h4> <p className='p'>{userData.student.studentemailId}</p>
            </div>
            <div className="vertical-line"></div>
            <div className="item1">
              <h4 className='h'>Contact No.: </h4> <p className='p'>{userData.student.contactNumber}</p>
            </div>
          </div>
          <hr />
          <button className='edit' onClick={handleContributeClick}>Edit Profile</button>
        </>
      )}
    </div>
  )
}

export default Credentials;

// import React, { useState, useEffect } from 'react';
// import './Credentials.css';
// import axios from 'axios';
// import CryptoJS from 'crypto-js';

// const Credentials = ({ userData }) => {
//   const handleContributeClick = () => {
//     window.open('/studprofedit', '_blank'); 
//   };
  
//   return (
//     <div className='container1'>
//       {/* Render user data if available */}
//       {userData && Object.keys(userData).length > 0 ? (
//         <>
//           <h2 className='name'>{userData.student.name} </h2>
//           <div className="reg">
//             <h2 className='reg_id'>Registration Id:  {userData.student.regId}</h2>
//             <h2 className='prn_no'>PRN no.:  {userData.student.prnNo}</h2>
//           </div>
//           <hr />
//           <p className='description'>Description: {userData.student.about}</p>
//           <hr />
//           <div className="mail-no">
//             <div className="item1">
//               <h4 className='h'>Email: </h4> <p className='p'>{userData.student.studentemailId}</p>
//             </div>
//             <div className="vertical-line"></div>
//             <div className="item1">
//               <h4 className='h'>Contact No.: </h4> <p className='p'>{userData.student.contactNumber}</p>
//             </div>
//           </div>
//           <hr />
//           <button className='edit' onClick={handleContributeClick}>Edit Profile</button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   )
// }

// export default Credentials;
