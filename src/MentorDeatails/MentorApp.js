
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentDetails from '../StudentDeatails/StudentDeatails'; // Import the StudentDetails component
import MentorDeatails from './MentorDeatails';
import MentorStudentList from '../List/MentorStudentList';
import './MentorApp.css';
// Sample data of students
const mentorstudents = [
  { id: 1, name: 'Rohit Roy', rollNumber: '33121', PRNno: '7221989248' },
  { id: 2, name: 'Arman Malik', rollNumber: '33122', PRNno: '8753857932' },
  { id: 3, name: 'Rithik Roshan', rollNumber: '33123', PRNno: '92327932' },
  { id: 4, name: 'Jane Ghei', rollNumber: '33124', PRNno: '2010857932' },
  // Add more students as needed
];

function MentorApp() {
  return (
    <>
     <MentorDeatails/>
    <Router>
      <div className="app">
       
        <Switch>
          <Route exact path="/mentor/:id" render={() => <MentorStudentList mentorstudents={mentorstudents} />} />
          <Route path="/student/:name" render={(props) => <StudentDetails />} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default MentorApp;

