import { useState } from 'react';
import './ProInfo.css';

import ProfilePic from './ProfilePic';
import Option from './Option';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserInfo from './UserInfo';
import StudentList from './StudentList';
import StaticsticStudent from './StaticsticStudent';


function ProInfo() {
    

    return (



        <div className="container">
            <div className="App">

                <ProfilePic />
                <div className='Permanent_Info'>
                    <h1 className='registration_Id'>Registration ID</h1>
                    <h3 className='gmail_Id'>GmailID@gmail.com</h3>
                    <h1 className='phone_no'>9307052699</h1>
                    </div>
            </div>


            <div className="AppInfo">
                <Router>
                    <Option />
                
                <Routes>
                    <Route path="/" element={<UserInfo />} />
                    {/* <Route path="/about" element={<AboutUs/>}/> */}
                    {/* <Route path="/statistics" element={<Statistics/>}/> */}
                    <Route path="/StudentList" element={<StudentList />} />
                    {/* <Route path="/internships" element={<Internships/>}/> */}
                    {/* <Route path="/login" element={<Login/>}/> */}
                    <Route path="/StaticsticStudent" element={<StaticsticStudent />} />
                </Routes>
                </Router>
            </div>




        </div>








    )
}

export default ProInfo;
