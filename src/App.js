// import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import Login from './Components/Pages/Login/Login'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     // <div>
//     //   <Navbar/>
//     //   <Hero/>
//     //   <Login/>
//     // </div>.
//     <Router>
//       <div>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Hero/>}/>
//         <Route path="/login" element={<Login/>}/>
//       </Routes>
//       </div>
//     </Router>
    
//   )
// }

// export default App
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Login from './Components/Pages/Login/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          {/* <Route path="/about" element={<AboutUs/>}/> */}
          {/* <Route path="/statistics" element={<Statistics/>}/> */}
          {/* <Route path="/placements" element={<Placements/>}/> */}
          {/* <Route path="/internships" element={<Internships/>}/> */}
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
