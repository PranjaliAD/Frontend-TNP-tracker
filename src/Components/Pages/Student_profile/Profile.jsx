// import React, { useState, useEffect } from 'react';
// import './profile.css';
// import back_img from '../../../Assets/stud_profile2.jpg';
// import StudNav from '../../Navbar/Studnav';
// import Credentials from './Credentials';
// import Links from './Links';
// import Place_status from './Place_status';
// import Contri_section from './Contri_section';
// import axios from 'axios';

// const Profile = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/student/?prnNo=72278496B')
//       .then(response => {
//         setUserData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="nav">
//         <StudNav/>
//       </div>
//       {userData && userData.bgimage && ( // Check if userData and userData.bgimage are not null before rendering the background image
//         <div className="background_container">
//           <img src={userData.bgimage} alt="" className="background_image"/>
//           <div className="img_overlay">
//             {userData && userData.image && ( // Check if userData and userData.image are not null before rendering the image
//               <img src={userData.image} alt="profile_pic" />
//             )}
//           </div>
//         </div>
//       )}
      
//       <div className="prof_container">
//         <div className="prof_info">
//           <Credentials/>
//           <Links/>
//           {userData && userData.resume && ( // Check if userData and userData.resume are not null before rendering the link
//             <a href={userData.resume} target="_blank" rel="noopener noreferrer" className="resume_btn">Resume</a>
//           )}
//         </div>
//         <div className="placement_info">
//             <Place_status/>
//             <Contri_section/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useState, useEffect } from 'react';
import './profile.css';
import back_img from '../../../Assets/stud_profile2.jpg';
import StudNav from '../../Navbar/Studnav';
import Credentials from './Credentials';
import Links from './Links';
import Place_status from './Place_status';
import Contri_section from './Contri_section';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(() => {
    // Retrieve userData from localStorage
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  useEffect(() => {
    // Fetch userData if not available in localStorage
    if (!userData) {
      axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/student/?prnNo=72278496B')
        .then(response => {
          const userData = response.data;
          // Store userData in localStorage
          localStorage.setItem('userData', JSON.stringify(userData));
          setUserData(userData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [userData]);

  return (
    <div>
      <div className="nav">
        <StudNav/>
      </div>
      {userData && userData.bgimage && (
        <div className="background_container">
          <img src={userData.bgimage} alt="" className="background_image"/>
          <div className="img_overlay">
            {userData && userData.image && (
              <img src={userData.image} alt="profile_pic" />
            )}
          </div>
        </div>
      )}
      
      <div className="prof_container">
        <div className="prof_info">
          <Credentials userData={userData} />
          <Links userData={userData} />
          {userData && userData.resume && (
            <a href={userData.resume} target="_blank" rel="noopener noreferrer" className="resume_btn">Resume</a>
          )}
        </div>
        <div className="placement_info">
            <Place_status/>
            <Contri_section/>
        </div>
      </div>
    </div>
  );
}

export default Profile;


