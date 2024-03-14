import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Login from './Components/Pages/Login/Login';
import Placement from './Components/Pages/Placement/Placement';
import Title from './Components/Title/Title'
import Programs from './Components/programs/programs'
import Modal from './Components/Modal/Modal'
import Statistics from './Components/Statistics/Statistics'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
// import ProfileStud from './Components/Student/ProfileStud';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Hero/>}/>
          {/* <Route path="/about" element={<AboutUs/>}/> */}
          {/* <Route path="/statistics" element={<Statistics/>}/> */}
          <Route path="/placements" element={<Placement/>}/>
          {/* <Route path="/internships" element={<Internships/>}/> */}
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/login" element={<ProfileStud/>}/> */}
        </Routes>
        <div className="container">
        <Title subTitle = 'OUR ACHIEVEMENTS' title='DREAM OFFERS' />
        <Programs />
        <Modal />

      <Title subTitle = 'STATISTICS' title='Strike our graph' />
      <Statistics/>
      <Title subTitle = 'TESTIMONIALS' title='Meet Our Coordinators' />
      <Testimonials />
      <Title subTitle = 'Contact Us' title='Get in Touch' />
      <Testimonials /> 
      

      <Footer />
      </div>
      </div>
    </Router>
  );
}

export default App;
