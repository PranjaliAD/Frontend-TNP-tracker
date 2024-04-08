import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Login from './Components/Pages/Login/Login';
import Placement from './Components/Pages/Placement/Placement';
import Questions from './Components/Questions/Questions';
import Statistics2 from './Components/Statistics2/Statistics2'; // Import Statistics2 component
import announcement from './Components/Announcement/Announcement'
// import ITPage from './Components/Pages/StatIT';
// import CompPage from './Components/Pages/StatComp';
// import ENTPage from './Components/Pages/StatENTC';
// import DreamOffersPage from './Components/Pages/StatDreamOffers';
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/placements" element={<Placement/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/questions" element={<Questions />} />
          <Route path="/statistics2" element={<Statistics2 />} /> {/* Add this route */}
          {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/it" component={ITPage} />
        <Route path="/comp" component={CompPage} />
        <Route path="/entc" component={ENTPage} />
        <Route path="/dream-offers" component={DreamOffersPage} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
