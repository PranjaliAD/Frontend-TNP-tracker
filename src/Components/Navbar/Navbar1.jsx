// import React from 'react'
// import './Navbar.css'
// import logo from '../../Assets/logo2.png'

// const Navbar = () => {
//   return (
//     <nav className='container'>
//         <img src={logo} alt="" className='logo'/>
//         <ul>
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Statistics</li>

//             <li><button className='btn'>Login/Register</button></li> 
//         </ul>
//     </nav>
//   )
// }

// export default Navbar
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../../Assets/logo2.png';

const Navbar = () => {
  return (
    <nav className='nav-container'>
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

export default Navbar;