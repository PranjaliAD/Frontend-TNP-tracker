import React, { useState } from 'react';
import './MainAdmin.css';
import Header from '../Header.jsx';
// import Sidebar from '../SideBar.jsx';
import Home from '../AdminHome/AdminHome.jsx'

const Dash = () => {
  // const bodyStyles = {
  //   backgroundColor: 'lightlue',
  //   padding: '20px',+++++
  
  // };
  
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle);
  // };

  return (
    <div >
      <Header />
      {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <Home />
    </div>
  );
};

export default Dash;
