import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Login from './Components/Pages/Student_profile/Profile';
import Placement from './Components/Pages/Placement/Placement';
import Questions from './Components/Questions/Questions';
import Statistics2 from './Components/Statistics2/Statistics2';
import Announcement from './Components/Announcement/Announcement'; // Import Announcement component

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/placements" element={<Placement/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/questions" element={<Questions />} />
          <Route path="/statistics2" element={<Statistics2 />} />
          <Route path="/announcement" element={<Announcement />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
