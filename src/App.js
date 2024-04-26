import React, { useState } from 'react'; // Import useState from react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Announcement from './Components/Announcement/Announcement';
import RegistrationForm from './Components/Admin/ChangeItems/AddAnnouncement';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Login from './Components/Pages/Login/Login';
import Studlogin from './Components/Pages/Student_profile/Profile';
import Placement from './Components/Pages/Placement/Placement';
import Questions from './Components/Questions/Questions';
import Statistics2 from './Components/Pages/StatisticsIT/Statistics2/Statistics2';
import StatisticsCS from './Components/Pages/StatisticsCS/Statistics2/Statistics2';
import StatisticsENTC from './Components/Pages/StatisticsENTC/Statistics2/Statistics2';
import StatisticsDream from './Components/Pages/StatDreamOffers/Statistics2/Statistics2';
import Admin from './Components/Admin/AdminHome/AdminHome';
import Mentorlist from './Components/Admin/AdminList/MentorList';
import Studentlist from './Components/Admin/AdminList/Studentlist';
import Adminlist from './Components/Admin/AdminList/AdminList';
import AdminLogin from './Components/Pages/Login/AdminLogin/AdminLogin';

function App() {
  const [newAnnouncement, setNewAnnouncement] = useState(null);

  const handleAddAnnouncement = (announcement) => {
    setNewAnnouncement(announcement);
  };
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/placements" element={<Placement />} />
            <Route path="/login" element={<Login />} />
            <Route path="/studlogin" element={<Studlogin />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/statistics2" element={<Statistics2 />} />
            {/* <Route path="/announcement" element={<Announcement />} /> */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/Mentorlist" element={<Mentorlist />} />
            <Route path="/Studentlist" element={<Studentlist />} />
            <Route path="/AdminList" element={<Adminlist />} />
            <Route path="/announcements" element={<Announcement newAnnouncement={newAnnouncement} />} />
            <Route path="/addannouncement" element={<RegistrationForm onAddAnnouncement={handleAddAnnouncement} />} />
       
            <Route path="/adlogin" element={<AdminLogin />} />
            <Route path="/it" element={<Statistics2 />} />
            <Route path="/comp" element={<StatisticsCS />} />
            <Route path="/entc" element={<StatisticsENTC />} />
            <Route path="/dream" element={<StatisticsDream />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
