import React, { useState, useEffect } from 'react';
import './Hero.css';
import dark_arrow from '../../Assets/dark-arrow.png';
// import { Link } from 'react-scroll';
import Title from '../Title/Title';
import Companies from '../Companies/Companies';
import Statistics from '../Statistics/Statistics';
// impo+rt Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import Announcement from '../Announcement/Announcement';
// import Alumni from '../Alumni/Alumni';
// import Charts from '../charts/charts';
import { Link, useLocation } from 'react-router-dom';
import Test from '../Testimonialss'
import ProfileStud from '../Coordinators/Coordinators'
// import Admin from '../Admin/MainAdmin/MainAdmin'
// import Sample from '../coordinatorcard'
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
  const handleExploreMoreClick = (e) => {
    e.preventDefault();
    const companiesSection = document.getElementById('companies');
    if (companiesSection) {
      const offsetTop = companiesSection.offsetTop - 225; // Adjusted offset for better visibility
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };
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
            {/* <p>Discover valuable resources, senior guidance, and daily updates of TNP cell drives. Unlock doors to top companies, prestigious organizations, and exciting career opportunities with our support. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias.</p> */}
            {/* <p>Discover valuable resources, senior guidance, and daily updates of TNP cell drives. Unlock doors to top companies, prestigious organizations, and exciting career opportunities with our support. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias.</p> */}
            {/* <Link to="/companies" className="Explorebtn">Explore more <img src={dark_arrow} alt="" /></Link> */}
            <p>Discover valuable resources, senior guidance, and daily updates of TNP cell drives. Unlock doors to top companies, prestigious organizations, and exciting career opportunities with our support. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias.</p>
            <a href="#!" onClick={handleExploreMoreClick} className='nav-link explore-more-btn'>Explore More</a>
        {/* <Link
          to="companies"
          smooth={true}
          duration={500}
          className="Explorebtn"
        >
          Explore more <img src={dark_arrow} alt="" />
        </Link> */}
          </div>
        </div>
      )}
      {/* <Title subTitle='Internship and Placement Achievements' title='Celebrating Student Excellence' /> */}
      <Announcement />

      <Title subTitle='Corporate Engagement Snapshot' title='Explore Trends, Success Rates, and Industry Insights' />
      <Companies />

      <Title subTitle='Beyond the Numbers: Insights into Opportunities' title='Discover Companies, Packages, and Hiring Trends' />
      <Statistics />
      <Link to="/statistics2">
        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600" style={{ display: 'block', margin: 'auto', marginTop: '20px', marginBottom: '20px', padding: '10px 20px', backgroundColor: '#24a', color: 'white', borderRadius: '5px' }}>
          Go to Detailed Statistics
        </button>
      </Link>
      <hr />

      <Test />
      <hr />

      <Title subTitle='Training and Internship Coordinators' title='Meet Our Coordinators' />
      <ProfileStud />
      <div className="mr-2">
        {/* <Admin/> */}
      </div>
      {/* <Sample/> */}
      <Footer />
    </div>
  )
}

export default Hero;
