import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Studnav.css';
import logostud from '../../Assets/logo.jpg';
import studicon from '../../Assets/stud-icon.webp';

const Studnav = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <nav className='studnav-container'>
            <img src={logostud} alt="" className='logo' />
            <ul>
                <li><Link to="/" className='nav-link'>Home</Link></li>
                <li><Link to="/placements" className='nav-link'>Placements</Link></li>
                <li><Link to="/internships" className='nav-link'>Internships</Link></li>
                <li className='dropdown'>
                    <button className='btn' onClick={toggleDropdown}>
                        <img src={studicon} alt="Student Icon" />Profile 
                        {dropdownVisible ? (
                            <span>&#9650;</span> 
                        ) : (
                            <span>&#9660;</span> 
                        )}
                    </button>
                    {dropdownVisible && (
                        <ul className='dropdown-menu'>
                            <li><Link to="/account">Account</Link></li>
                            <li><Link to="/edit">Edit</Link></li>
                            <li><Link to="/signout">Sign Out</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Studnav;
