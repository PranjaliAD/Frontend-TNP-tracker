import React from 'react';
import './profile.css';
import back_img from '../../../Assets/stud_profile2.jpg';
import Navbar from '../../Navbar/Studnav';
import Credentials from './Credentials';
import Links from './Links'
import Place_status from './Place_status';

const Profile = () => {
  return (
    <div>
      <div className="nav">
        <Navbar/>
      </div>
      <div className="background_container">
        <img src={back_img} alt="" className="background_image"/>
        <div className="img_overlay"></div>
      </div>
      
      <div className="prof_container">
        <div className="profile_info">
          <Credentials/>
          <Links/>
          <button className='resume'>Resume</button>
        </div>
        <div className="placement_info">
            <Place_status/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
