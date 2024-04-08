import React, { useState, useEffect } from 'react';
import './Hero.css';
import dark_arrow from '../../Assets/dark-arrow.png';
import Title from '../Title/Title';
import Programs from '../programs/programs';
import Statistics from '../Statistics/Statistics';
// impo+rt Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import Announcement from '../Announcement/Announcement';
// import Alumni from '../Alumni/Alumni';
// import Charts from '../charts/charts';
import { Link, useLocation } from 'react-router-dom'; 
import Test from '../Testimonialss'
import Alumnicard from '../alumnicard'
import ProfileStud from '../Coordinators/Coordinators'
const Hero = () => {
  const [navbarBackground, setNavbarBackground] = useState(false); // State to manage navbar background color
  const location = useLocation(); // Get current location using useLocation

  useEffect(() => {
    // Check if current location is '/statistics2' and update navbar background accordingly
    if (location.pathname === '/statistics2') {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  }, [location.pathname]); // Listen for changes in location.pathname

  return (
    <div>
      {!navbarBackground && (
        <div className="hero">
          <div className="hero-text">
            <h1>
              <span className='animated-text'>Unlock Opportunities </span>
              <div className='type'>Your Guide to Internships and Placements </div>
              at PICT..
            </h1>
            <p>Discover valuable resources, senior guidance, and daily updates of TNP cell drives. Unlock doors to top companies, prestigious organizations, and exciting career opportunities with our support. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
          </div>
        </div>
      )}
      <Title subTitle='Internship and Placement Achievements' title='Celebrating Student Excellence' />
      <Announcement />
      <div className="container">
        <Title subTitle='Corporate Engagement Snapshot' title='Explore Trends, Success Rates, and Industry Insights' />
        <Programs />
      </div>
      <Title subTitle='Beyond the Numbers: Insights into Opportunities' title='Discover Companies, Packages, and Hiring Trends' />
      <Statistics />

      <Link to="/statistics2">
  <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600" style={{ display: 'block', margin: 'auto', marginTop: '20px',marginBottom:'20px', padding: '10px 20px', backgroundColor: '#24a', color: 'white', borderRadius: '5px' }}>
    Go to Detailed Statistics
  </button>
</Link>

      {/* <ButtonNew/> */}
      {/* <Title subTitle='TESTIMONIALS' title='Meet Our Coordinators' />
      <Alumni /> */}
      
      {/* <Title subTitle='Contact Us' title='Get in Touch' />
      <Testimonials /> */}
      {/* <Charts /> */}
      <Test/>
      {/* <profile/> */}
      {/* <Alumnicard/> */}
      <Title subTitle='Training and Internship Coordinators' title='Meet Our Coordinators' />
      <ProfileStud/>
      <Footer />
      {/* <p>Hello World <Msgcard/></p> */}
    </div>
  )
}

export default Hero;
