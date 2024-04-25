import React from 'react';
import { Link } from 'react-router-dom';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/it">
            <BsGrid1X2Fill className='icon' /> IT
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/comp">
            <BsFillArchiveFill className='icon' /> Comp
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/entc">
            <BsFillGrid3X3GapFill className='icon' /> ENTC
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dream">
            <BsPeopleFill className='icon' /> Dream Offers
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
