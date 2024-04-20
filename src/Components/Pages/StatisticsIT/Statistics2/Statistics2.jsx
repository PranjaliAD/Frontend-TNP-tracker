import React, { useState } from 'react';
import './Statistics2.css';
import Header from '../Header.jsx';
import Sidebar from '../SideBar.jsx';
import Home from '../Home/Home.jsx';

const Dash = () => {
  // const bodyStyles = {
  //   backgroundColor: 'lightlue',
  //   padding: '20px',+++++
  
  // };
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  );
};

export default Dash;
