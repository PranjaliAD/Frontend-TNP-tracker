import logo from './logo.svg';
import './App.css';
import Fun from './edit_f/Fun';
import E_Pic from './edit_photo/E_Pic';
import Fun_place from './edit_place/Fun_place';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div className="App">
      
      <Router>

        <Navbar />

        </Router>
      <E_Pic/>
     <Fun/>
     <Fun_place/>
    </div>
  );
}

export default App;
