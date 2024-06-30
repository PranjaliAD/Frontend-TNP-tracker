import React ,{useState,useEffect} from 'react'
import './AdminHome.css'
import Adminlist from '../AdminList/AdminList'
import Mentorlist from '../AdminList/MentorList'
import Studentlist from '../AdminList/Studentlist'
import Profile from '../ProfileAdmin'
import AddChanges from '../ChangeItems/ChangeItems'
import Header from '../Header'
import axios from 'axios'
const MainAdmin = () => {
  const [admindata, setAdminData] = useState({}); // Initialize userData as null
  // const [currentComponent, setCurrentComponent] = useState(<Profile />);
  useEffect(() => {
    const fetchData = async () => {
        try {
            // Fetch user data from localStorage
            // const storedUserData = localStorage.getItem('userData');
            // if (storedUserData) {
            //     setUserData(JSON.parse(storedUserData));
            // } else {
                // Fetch user data from API if not available in localStorage
                const value = localStorage.getItem('adminData');
                const response = await axios.get(`https://placement-internship-tracker-backend.vercel.app/api/admins/?adminemailId=${value}`);
                const user = response.data;

                localStorage.setItem('admindata', JSON.stringify(user));
                setAdminData(user);
            // }
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error here, perhaps set an error state
        }
    };

    fetchData(); // Call the fetchData function

}, []);

  return (
    <div className='admin-div'>
      <Header/>
      <div className="admin-main">
      <div className="admin-info border-b border-gray-300 flex items-center justify-center">
        <div className='admin-item profile-admin'>
          <h2 className="heading-admin-home">Profile</h2>
          <Profile userData = {admindata.admin}/>
        </div>
        <div className='admin-item'>
          <h2 className="heading-admin-home">Modify Content</h2>
          <AddChanges />
        </div>
      </div>
      <div className='Admin-div'>
      
        <div className='admin-item-list'>
          <h2 className="heading-admin-home">Admin List</h2>
          <Adminlist />
        </div>
        <div className='admin-item-list'>
          <h2 className="heading-admin-home">Mentor List</h2>
          <Mentorlist />
        </div>
        <div className='admin-item-list'>
          <h2 className="heading-admin-home">Student List</h2>
          <Studentlist />
        </div>
      </div>
      </div>
    </div>
  )
}

export default MainAdmin
