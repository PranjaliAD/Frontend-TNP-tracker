// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
// import Login from './Components/Pages/Login/Login';
// import Placement from './Components/Pages/Placement/Placement';
// // import ProfileStud from './Components/Student/ProfileStud';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar/>
//         <Routes>
//           <Route path="/" element={<Hero/>}/>
//           {/* <Route path="/about" element={<AboutUs/>}/> */}
//           {/* <Route path="/statistics" element={<Statistics/>}/> */}
//           <Route path="/placements" element={<Placement/>}/>
//           {/* <Route path="/internships" element={<Internships/>}/> */}
//           <Route path="/login" element={<Login/>}/>
//           {/* <Route path="/login" element={<ProfileStud/>}/> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Login from './Components/Pages/Login/Login';
import Placement from './Components/Pages/Placement/Placement';
import Questions from './Components/Questions/Questions';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Hero/>}/>
          {/* <Route path="/about" element={<AboutUs/>}/> */}
          {/* <Route path="/statistics" element={<Statistics/>}/> */}
          <Route path="/placements" element={<Placement/>}/>
          {/* <Route path="/internships" element={<Internships/>}/> */}
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/login" element={<ProfileStud/>}/> */}
          <Route path="/questions" element={<Questions />} /> {/* Use 'element' instead of 'component' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
