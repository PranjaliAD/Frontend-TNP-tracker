// import { useState } from 'react';
// import './ProInfo.css';
// import Nav from '../../Navbar/Nav';

// // import ProfilePic from './ProfilePic';
// import Option from './Option';
// import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
// import UserInfo from './UserInfo';
// import StudentList from './StudentList';
// import ProfilePic from './StudentProfile/ProfilePic'
// import StaticsticStudent from './StaticsticStudent';
// // import Vtry from './Vtry';

// function ProInfo() {
//     return (
//         <div>
//             <div className="nav"><Nav /></div>
//             <div className="prof-container">
//                 <div className="App">
//                     <ProfilePic />
//                     <div className='Permanent_Info'>
//                         <h1 className='registration_Id'>Registration ID</h1>
//                         <h3 className='gmail_Id'>GmailID@gmail.com</h3>
//                         <h1 className='phone_no'>9307052699</h1>
//                     </div>
//                 </div>
//                 <div className="AppInfo">

//                     {/* <Option /> */}

//                     <ul>
//                         <li><a href="#" className='Option-link'></a></li>
//                         <li><Link to="/UserInfo" style={{ textDecoration: "none" }} className='Option-link'>User Info</Link></li>
//                         <li><Link to="/StudentList" style={{ textDecoration: "none" }} className='Option-link'>Student List</Link></li>
//                         <li><Link to="/StaticsticStudent" style={{ textDecoration: "none" }} className='Option-link'>Statistics of Student</Link></li>
//                     </ul>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default ProInfo;

import { useState } from 'react';
import './ProInfo.css';
import Nav from '../../Navbar/Nav';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import StudentList from './StudentList';
import ProfilePic from './StudentProfile/ProfilePic';
import StaticsticStudent from './StaticsticStudent';

function ProInfo() {
    const [currentComponent, setCurrentComponent] = useState(<UserInfo />);

    const renderComponent = (component) => {
        setCurrentComponent(component);
    };

    return (
        <div>
            <div className="nav"><Nav /></div>
            <div className="prof-container">
                <div className="App">
                    <ProfilePic />
                    <div className='Permanent_Info'>
                        <h1 className='registration_Id'>Registration ID</h1>
                        <h3 className='gmail_Id'>GmailID@gmail.com</h3>
                        <h1 className='phone_no'>9307052699</h1>
                    </div>
                </div>
                <div className="AppInfo">
                    <ul className="internal-navbar">
                        <li><button className="user-btn"onClick={() => renderComponent(<UserInfo />)}>User Info</button></li>
                        <li><button className="stuList-btn" onClick={() => renderComponent(<StudentList />)}>Student List</button></li>
                        <li><button className="staticList-btn" onClick={() => renderComponent(<StaticsticStudent />)}>Statistics of Student</button></li>
                    </ul>
                    {currentComponent && currentComponent}
                </div>
            </div>
        </div>
    )
}

export default ProInfo;