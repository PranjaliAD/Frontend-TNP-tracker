import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Oq from './Oqfoldar/Oq';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div className="App">
     
      <Router>

        <Navbar />

        /</Router>
      <Oq />
    </div>
  )
}

export default App;
