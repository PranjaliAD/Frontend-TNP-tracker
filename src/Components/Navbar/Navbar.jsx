import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/logo2.png';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAnnouncementClick = (e) => {
    e.preventDefault();
    const announcementSection = document.getElementById('announcement-section');
    if (announcementSection) {
      const offsetTop = announcementSection.offsetTop - 140; // Adjusted offset for better visibility
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleStatisticsClick = (e) => {
    e.preventDefault();
    const statisticsSection = document.getElementById('statistics-section');
    if (statisticsSection) {
      const offsetTop = statisticsSection.offsetTop - 240; // Adjusted offset for better visibility
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  // Conditionally render the navbar only on the home page
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <nav className={`navbar-container ${scrolling ? 'scrolled' : ''}`}>
      <Link to="/" className='logo-link'>
        <img src={logo} alt="Logo" className='logo'/>
      </Link>
      <ul>
        <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
        <li><a href="#!" onClick={handleAnnouncementClick} className='nav-link'>Announcements</a></li>
        <li><a href="#!" onClick={handleStatisticsClick} className='nav-link'>Statistics</a></li>
       
        <li><Link to="/login" className='btn'>Login/Register</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
