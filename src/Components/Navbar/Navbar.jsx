// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Navbar.css';
// import logo from '../../Assets/logo2.png';

// const Navbar = () => {
//   return (
//     <nav className='nav-container'>
//         <img src={logo} alt="" className='logo'/>
//         <ul>
//             <li><Link to="/" className='nav-link'>Home</Link></li>
//             <li><Link to="/about" className='nav-link'>About Us</Link></li>
//             <li><Link to="/statistics" className='nav-link'>Statistics</Link></li>
//             <li><Link to="/placements" className='nav-link'>Placements</Link></li>
//             <li><Link to="/internships" className='nav-link'>Internships</Link></li> 
//             <li><Link to="/login" className='btn'>Login/Register</Link></li> 
//         </ul>
//     </nav>
//   );
// }

// export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../../Assets/logo2.png';

// const Navbar = () => {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`nav-container ${scrolling ? 'scrolled' : ''}`}>
//       <img src={logo} alt="" className='logo'/>
//       <ul>
//         <li><Link to="/" className='nav-link'>Home</Link></li>
//         <li><Link to="/about" className='nav-link'>About Us</Link></li>
//         <li><Link to="/statistics" className='nav-link'>Statistics</Link></li>
//         <li><Link to="/placements" className='nav-link'>Placements</Link></li>
//         <li><Link to="/internships" className='nav-link'>Internships</Link></li> 
//         <li><Link to="/login" className='btn'>Login/Register</Link></li> 
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/logo2.png';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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

  return (
    <nav className={`nav-container ${scrolling ? 'scrolled' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><Link to="/" className='nav-link'>Home</Link></li>
        <li><Link to="/about" className='nav-link'>About Us</Link></li>
        <li><Link to="/statistics" className='nav-link'>Statistics</Link></li>
        <li><Link to="/placements" className='nav-link'>Placements</Link></li>
        <li><Link to="/internships" className='nav-link'>Internships</Link></li> 
        <li><Link to="/login" className='btn'>Login/Register</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;