import { useState } from 'react';
import './ProInfo.css';
import Nav from '../../Navbar/Nav';

// import ProfilePic from './ProfilePic';
import Option from './Option';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserInfo from './UserInfo';
import StudentList from './StudentList';
// import StaticsticStudent from './StaticsticStudent';
// import Vtry from './Vtry';

function ProInfo() {
    return (
        <div>
            <div className="nav"><Nav/></div>
            <div className="prof-container">
                <div className="App">
                    <div className='Permanent_Info'>
                        <h1 className='registration_Id'>Registration ID</h1>
                        <h3 className='gmail_Id'>GmailID@gmail.com</h3>
                        <h1 className='phone_no'>9307052699</h1>
                    </div>
                </div>
                <div className="AppInfo">
                    <Option />
                    <Routes>
                        <Route path="/" element={<UserInfo />} />
                        <Route path="/StudentList" element={<StudentList />} />
                    </Routes>
                    {/* <a path="/Vtry" element={<Vtry/>}/> */}
                </div>
            </div>
        </div>
    )
}

export default ProInfo;