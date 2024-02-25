import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Statistics</li>
            <li>Placements</li>
            <li>Internships</li> 
            <li><button className='btn'>Login/Register</button></li> 
        </ul>
    </nav>
  )
}

export default Navbar