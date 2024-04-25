import React from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const UserProfile = () => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border h-96 max-h-full overflow-y-auto">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          This is some information about the user.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Full name
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              John Doe
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Email address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              johndoe@example.com
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Phone number
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              (123) 456-7890
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              123 Main St <br />
              Anytown, USA 12345
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UserProfile;


// import { useState, useEffect } from 'react';
// import './ProInfo.css';
// import Nav from '../../Navbar/Nav';
// import UserInfo from './UserInfo';
// import StudentList from './StudentList';
// import ProfilePic from './StudentProfile/ProfilePic';
// import StaticsticStudent from './StaticsticStudent';
// import axios from 'axios';

// function ProInfo() {
//     const [currentComponent, setCurrentComponent] = useState(<UserInfo />);
//     const [userData, setUserData] = useState(null); // Initialize userData as null

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const storedUserData = localStorage.getItem('userData');
//                 if (storedUserData) {
//                     setUserData(JSON.parse(storedUserData));
//                 } else {
//                     const response = await axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/instructors/?instructoremailId=asawati@pict.edu');
//                     setUserData(response.data);
//                     localStorage.setItem('userData', JSON.stringify(response.data));
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);
 
//     const renderComponent = (component) => {
//         setCurrentComponent(component);
//     };

//     return (
//         <div>
//             <div className="nav"><Nav /></div>
//             <div className="prof-container">
//                 <div className="App">
//                     <ProfilePic />
//                     <div className='Permanent_Info'>
//                         <h1 className='registration_Id'>Credentials</h1>
//                         {userData && (
//                             <>
//                                 <h3 className='gmail_Id'>{userData.instructor.instructoremailId}</h3>
//                                 <h1 className='phone_no'>{userData.instructor.contactNumber}</h1>
//                             </>
//                         )}
//                     </div>
//                 </div>
//                 <div className="AppInfo">
//                     <ul className="internal-navbar">
//                         <li><button className="user-btn" onClick={() => renderComponent(<UserInfo />)}>User Info</button></li>
//                         <li><button className="stuList-btn" onClick={() => renderComponent(<StudentList />)}>Student List</button></li>
//                         <li><button className="staticList-btn" onClick={() => renderComponent(<StaticsticStudent />)}>Statistics of Student</button></li>
//                     </ul>
//                     {currentComponent && currentComponent}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProInfo;