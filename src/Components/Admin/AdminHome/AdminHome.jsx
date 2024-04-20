import React from 'react'
import './AdminHome.css'
import Adminlist from '../AdminList/AdminList'
import Mentorlist from '../AdminList/MentorList'
import Studentlist from '../AdminList/Studentlist'
import Profile from '../ProfileAdmin'
import AddChanges from '../ChangeItems/ChangeItems'
const MainAdmin = () => {
  return (
    <div className='admin-main'>
      <div className="admin-info border-b border-gray-300 flex items-center justify-center">
        <div className='admin-item'>
          <h2 className="heading-admin-home">Profile</h2>
          <Profile />
        </div>
        <div className='admin-item'>
          <h2 className="heading-admin-home">Modify Content</h2>
          <AddChanges />
        </div>
      </div>
      <div className='Admin-div'>
      
        <div className='admin-item'>
          <h2 className="heading-admin-home">Admin List</h2>
          <Adminlist />
        </div>
        <div className='admin-item'>
          <h2 className="heading-admin-home">Mentor List</h2>
          <Mentorlist />
        </div>
        <div className='admin-item'>
          <h2 className="heading-admin-home">Student List</h2>
          <Studentlist />
        </div>
      </div>
    </div>
  )
}

export default MainAdmin
