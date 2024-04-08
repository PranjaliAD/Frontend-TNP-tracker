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

  // Check if the current location is "statistics2"
  if (location.pathname === '/statistics2') {
    return null; // Return null to remove the Navbar
  }

  return (
    <nav className={`nav-container ${scrolling ? 'scrolled' : ''}`}>
      <Link to="/" className='logo-link'>
        <img src={logo} alt="Logo" className='logo'/>
      </Link>
      <ul>
        <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
        <li><Link to="/about" className={`nav-link ${location.pathname === '/Announcement' ? 'active' : ''}`}>Announcements</Link></li>
        <li><Link to="/statistics" className={`nav-link ${location.pathname === '/statistics' ? 'active' : ''}`}>Statistics</Link></li>
        {/* <li><Link to="/placements" className={`nav-link ${location.pathname === '/placements' ? 'active' : ''}`}>Placements</Link></li>
        <li><Link to="/internships" className={`nav-link ${location.pathname === '/internships' ? 'active' : ''}`}>Internships</Link></li>  */}
        <li><Link to="/login" className='btn'>Login/Register</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;