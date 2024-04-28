// import { useState, useEffect } from 'react';
// import './ProInfo.css';
// import Nav from '../../Navbar/Nav';
// import UserInfo from './UserInfo';
// import StudentList from './StudentList';
// import ProfilePic from './StudentProfile/ProfilePic';
// import StaticsticStudent from './StaticsticStudent';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://placement-internship-tracker-backend.vercel.app/api/instructors/?instructoremailId=${value}';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// function ProInfo() {
//     const [currentComponent, setCurrentComponent] = useState(<UserInfo />);
//     const [userData, setUserData] = useState(() => {
//         // Retrieve userData from localStorage
//         const storedUserData = localStorage.getItem('userData');
//         return storedUserData ? JSON.parse(storedUserData) : null;
//     });

//     useEffect(() => {
//         if (!userData) {
//             const cookies = document.cookie;
//             const value = localStorage.getItem('instructorsData');
//             axios.get(`https://placement-internship-tracker-backend.vercel.app/api/instructors/?instructoremailId=${value}`)
//                 .then(response => {
//                     const user = response.data;
//                     console.log(response.data)
//                     // Store userData in localStorage
//                     localStorage.setItem('userData', JSON.stringify(user));
//                     setUserData(user);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching data:', error);
//                 });
//         }
//     }, []);

//     const renderComponent = (component) => {
//         setCurrentComponent(component);
//     };

//     return (
//         <div>
//             {console.log(userData)}
//             <div className="nav"><Nav /></div>
//             <div className="prof-container">
//                 <div className="App">
//                     <ProfilePic />
//                     <div className='Permanent_Info'>
//                         <h1 className='instructoremailId'>Credentials</h1>
//                         {userData && userData.instructor &&(
//                                 <h3 className='instructoremailId'> {userData.instructor.instructoremailId}</h3>
//                             )
//                         }
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

// // import { useState } from 'react';
// // import './ProInfo.css';
// // import Nav from '../../Navbar/Nav';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // import UserInfo from './UserInfo';
// // import StudentList from './StudentList';
// // import ProfilePic from './StudentProfile/ProfilePic';
// // import StaticsticStudent from './StaticsticStudent';

// // function ProInfo() {
// //     const [currentComponent, setCurrentComponent] = useState(<UserInfo />);

// //     const renderComponent = (component) => {
// //         setCurrentComponent(component);
// //     };

// //     return (
// //         <div>
// //             <div className="nav"><Nav /></div>
// //             <div className="prof-container">
// //                 <div className="App">
// //                     <ProfilePic />
// //                     <div className='Permanent_Info'>
// //                         <h1 className='registration_Id'>Registration ID</h1>
// //                         <h3 className='gmail_Id'>GmailID@gmail.com</h3>
// //                         <h1 className='phone_no'>9307052699</h1>
// //                     </div>
// //                 </div>
// //                 <div className="AppInfo">
// //                     <ul className="internal-navbar">
// //                         <li><button className="user-btn"onClick={() => renderComponent(<UserInfo />)}>User Info</button></li>
// //                         <li><button className="stuList-btn" onClick={() => renderComponent(<StudentList />)}>Student List</button></li>
// //                         <li><button className="staticList-btn" onClick={() => renderComponent(<StaticsticStudent />)}>Statistics of Student</button></li>
// //                     </ul>
// //                     {currentComponent && currentComponent}
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default ProInfo;

import React, { useState, useEffect } from 'react';
import './ProInfo.css';
import Nav from '../../Navbar/Nav';
import UserInfo from './UserInfo';
import StudentList from './StudentList';
import ProfilePic from './StudentProfile/ProfilePic';
import StaticsticStudent from './StaticsticStudent';
import axios from 'axios';

function ProInfo() {
    const [currentComponent, setCurrentComponent] = useState(<UserInfo />);
    const [userData, setUserData] = useState(null); // Initialize userData as null

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch user data from localStorage
                const storedUserData = localStorage.getItem('userData');
                if (storedUserData) {
                    setUserData(JSON.parse(storedUserData));
                } else {
                    // Fetch user data from API if not available in localStorage
                    const value = localStorage.getItem('instructorsData');
                    const response = await axios.get(`https://placement-internship-tracker-backend.vercel.app/api/instructors/?instructoremailId=${value}`);
                    const user = response.data;
                    // Store userData in localStorage
                    localStorage.setItem('userData', JSON.stringify(user));
                    setUserData(user);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error here, perhaps set an error state
            }
        };

        fetchData(); // Call the fetchData function

    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    const renderComponent = (component) => {
        setCurrentComponent(component);
    };

    return (
        <div>
            {console.log(userData)}
            <div className="nav"><Nav /></div>

            <div className="prof-container">
                <div className="App">
                    <ProfilePic  />
                    <div className='Permanent_Info'>
                        {userData && userData.instructor && userData.instructor.length > 0 && (
                            <h3 className='instructoremailId'> {userData.instructor[0].instructoremailId}</h3>
                        )}
                    </div>
                </div>
                <div className="AppInfo">
                    <ul className="internal-navbar">
                        <li><button className="user-btn" onClick={() => renderComponent(<UserInfo userData={userData.instructor}/>)}>User Info</button></li>
                        <li><button className="stuList-btn" onClick={() => renderComponent(<StudentList userData={userData.instructor}/>)}>Student List</button></li>
                    </ul>
                    {currentComponent && currentComponent}
                </div>
            </div>
        </div>
    );
}

export default ProInfo;
