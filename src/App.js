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
import StudLogin from './Components/Pages/Student_profile/Profile';
import InstLogin from './Components/Pages/Instructor_profile/StudentProfile/ProInfo'
import Login from './Components/Pages/Login/Login';
import Placement from './Components/Pages/Placement/Placement';
import Internship from './Components/Pages/Internship/Internship';
import Questions from './Components/Questions/Questions';
import Contribute from './Components/Pages/Student_profile/Contri_ques/Contri_ques';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          {/* <Route path="/statistics" element={<Statistics/>}/> */}
          <Route path="/placements" element={<Placement/>}/>
          <Route path="/internship" element={<Internship/>}/>
          {/* <Route path="/login" element={<Login/>}/> */}
          <Route path="/login" element={<StudLogin/>}/>
          {/* <Route path="login" element={<InstLogin/>}/> */}
          <Route path="/questions" element={<Questions />} /> 
          <Route path="/contribute" element={<Contribute />} /> 
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
