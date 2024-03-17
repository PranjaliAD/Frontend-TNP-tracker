import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import ProInfo from './components/ProfileInfo/ProInfo';
const App = () => {
    return (
      <div>
        
          <Router>

     <Navbar />

     /</Router>
         <ProInfo/>
         {/* <UserInfo/> */}
      </div>
    )
  }
  
  export default App
        
     
          
