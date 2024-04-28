// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Nav.css';
// import logo from '../../Assets/logo2.png';

// const Navbar = () => {
//    return (
//     <nav >
//       <Link to="/" className='logo-link'>
//         <img src={logo} alt="Logo" className='logo'/>
//       </Link>
//       <ul>
//         <li><Link to="/" className="nav-link">Home</Link></li>
//         <li><Link to="/announcement" className="nav-link">Announcements</Link></li>
//         <li><Link to="/statistics" className="nav-link">Statistics</Link></li>
//         <li><Link to="/testimonials" className="nav-link">Testimonials</Link></li>
//         <li><Link to="/login" className='btn'>Login</Link></li> 
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../Assets/logo2.png';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleLoginClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="nav-container">
      <Link to="/" className='logo-link'>
        <img src={logo} alt="Logo" className='logo'/>
      </Link>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/announcement" className="nav-link">Announcements</Link></li>
        <li><Link to="/statistics" className="nav-link">Statistics</Link></li>
        <li><Link to="/testimonials" className="nav-link">Testimonials</Link></li>
        {/* <li><Link to="/login" className='btn'>Login</Link></li>  */}
        <li>
          <div className="dropdown">
            <button className="btn" onClick={handleLoginClick}>Login</button>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/login1" className='dropdown-item'>Student</Link>
                <Link to="/login2" className='dropdown-item'>Instructor</Link>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
