// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Navbar.css';
// import logo from '../../Assets/logo.jpg';

// const Navbar = () => {
//   return (
//     <nav className='container'>
//         <img src={logo} alt="" className='logo'/>
//         <ul>
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Statistics</li>
//             <li>Placements</li>
//             <li>Internships</li> 
//             {/* Use Link to navigate to the login page */}
//             <li><Link to="/login" className='btn'>Login/Register</Link></li> 
//         </ul>
//     </nav>
//   );
// }

// export default Navbar;
// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../../Assets/logo.jpg';

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

export default Navbar;
