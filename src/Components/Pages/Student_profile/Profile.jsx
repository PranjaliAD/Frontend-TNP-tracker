import React from 'react'
import './profile.css'
import back_img from '../../../Assets/stud_profile_img.jpeg';
import Navbar  from '../../Navbar/Studnav';

const Profile = () => {
  return (
    <div>
        <div className="nav">
            <Navbar/>
        </div>
        <img src={back_img} alt="" />
        <div className="prof_container">
            
        </div>
    </div>
  )
}

export default Profile