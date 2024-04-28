// import { useState } from 'react';
// import Group from './Group1';
// import { months } from '../tools';

// export default function EditableUserProfile1({
//     stored,
//     startEditCallback
// }) {

//     console.log()


//     return <div className='user1'>
//         <Group>
//             <h3>First Name:</h3> {stored.fname}
//             <h3>Last Name:</h3> {stored.lname}
//         </Group>
//         <Group>
//             <h3>Linkdin:</h3> {stored.linkdin}
//             <h3>GitHub:</h3> {stored.github}
//         </Group>
//         <Group>
//             <h3>Graduation:</h3> {stored.graduation}
//             <h3>Phone Number:</h3> {stored.phoneno}
//         </Group>
//         <Group>
//             <h3>Birthday:</h3> {months.getShortName(stored.month)} {stored.day}
//         </Group>
//         <Group>
//             <button className='btn2'
//                 onClick={startEditCallback}
//             >Edit</button>
//         </Group>
//     </div>
// }

// import { useState, useEffect } from 'react';
// import Group from './Group1';
// import { months } from '../tools';
// import axios from 'axios';
// axios.defaults.baseURL='https://placement-internship-tracker-backend.vercel.app/api/instructors/?instructoremailId=${value}';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


// const UserProfile1 = () =>{
//     const [userData, setUserData] = useState(() => {
//         // Retrieve userData from localStorage
//         const storedUserData = localStorage.getItem('userData');
//         return storedUserData ? JSON.parse(storedUserData) : null;
//       });

//     useEffect(() => {
//         //         if(!userData)
//         //             const value=localStorage.getItem('instructorsData');
//         //             axios.get(`https://placement-internship-tracker-backend.vercel.app/api/instructors/?instructoremailId=${value}`);
//         //             .then(response => {
//         //                 const user = response.data;
//         //                 console.log(response.data)
//         //                 // Store userData in localStorage
//         //                 localStorage.setItem('userData', JSON.stringify(user));
//         //                 setUserData(user);
//         //               })
                
//         //     } catch (error) {
//         //         console.error('Error fetching data:', error);
//         //     }
//         // };

//         // fetchData();
//         if (!userData) {
//             const cookies = document.cookie;
//             const value=localStorage.getItem('instructorsData');
//             axios.get(`https://placement-internship-tracker-backend.vercel.app/api/instructors/?instructoremailId=${value}`)
//               .then(response => {
//                 const user = response.data;
//                 console.log(response.data)
//                 // Store userData in localStorage
//                 localStorage.setItem('userData', JSON.stringify(user));
//                 setUserData(user);
//               })
//               .catch(error => {
//                 console.error('Error fetching data:', error);
//               });
//           }
//     }, [userData]);


//     console.log()


//     return <div className='user1'>
//         <Group>
//             {userData &&
//                 userData.instructor &&
//                 userData.instructor.length > 0 && (
//                     <h3 className='name'>Name  : {userData.instructor[0].name}</h3>
//                 )
//             }
//         </Group>
//         <Group>
//         {/* <h3 className='gmail_Id'>gender  : female</h3>{userData.instructor.gender} */}
//         {/* <h3>gender: female</h3> */}
//         {userData &&
//                 userData.instructor &&
//                 userData.instructor.length > 0 && (
//                     <h3 className='department'>department  : {userData.instructor[0].department}</h3>
//                 )
//             }
//         </Group>
//         <Group>
//             {/* <h3>Contact Number: 68342899</h3> */}
//             {/* {userData && (
//                 <>
//                     <h3 className='phone_no'>contact number : 6274893749</h3>{userData.instructor.contactNumber}
//                 </>
//             )} */}
//         </Group>

//         {/* <Group>
//             <button className='btn2'
//                 onClick={startEditCallback}
//             >Edit</button>
//         </Group> */}
//     </div>
// }

// export default UserProfile1;

import React, { useState, useEffect } from 'react';
// import './ProInfo.css';
// import Nav from '../../Navbar/Nav';
import axios from 'axios';

const UserProfile1 = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedUserData = localStorage.getItem('userData');
                if (storedUserData) {
                    setUserData(JSON.parse(storedUserData));
                } else {
                    const value = localStorage.getItem('instructorsData');
                    const response = await axios.get(`https://placement-internship-tracker-backend.vercel.app/api/instructors/?instructoremailId=${value}`);
                    const user = response.data;
                    localStorage.setItem('userData', JSON.stringify(user));
                    setUserData(user);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error
            }
        };
        fetchData();
    }, []);

    return (
        <div className='user1'>
            {userData && userData.instructor && userData.instructor.length > 0 && (
                <>
                    <h3 className='name'>Name : {userData.instructor[0].name}</h3>
                    <h3 className='department'>Department : {userData.instructor[0].department}</h3>
                </>
            )}
            
        </div>
    );
}

export default UserProfile1;
