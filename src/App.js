<<<<<<< HEAD


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentListTable from './List/StudentListTable';
import StudentDetails from './StudentDeatails/StudentDeatails'; // Import the StudentDetails component
import MentorDeatails from './MentorDeatails/MentorDeatails';
import AdminDeatails from './AdminDeatails/AdminDeatails';
import AdminListTable from './List/AdminListTable';
import MentorListTable from './List/MentorListTable';
import './App.css';
import MentorApp from './MentorDeatails/MentorApp';
// Sample data of students
const students = [
  { id: 1, name: 'Vaishnavi Deshmukh', rollNumber: '33101', PRNno: '53464643' },
  { id: 2, name: 'Rahul Deshpande', rollNumber: '33102', PRNno: '4363464775' },
  { id: 3, name: 'Pranjali Dharmadhikari', rollNumber: '33103', PRNno: '85234464775' },
  { id: 4, name: 'Rahul Deshpande', rollNumber: '33104', PRNno: '4363464775' },
  { id: 5, name: 'Rahul Deshpande', rollNumber: '33105', PRNno: '7989374475' },
  { id: 6, name: 'Rahul Deshpande', rollNumber: '33106', PRNno: '9579964775' },
  { id: 7, name: 'Rahul Deshpande', rollNumber: '33107', PRNno: '346767675' },
  { id: 8, name: 'Rahul Deshpande', rollNumber: '33108', PRNno: '668979775' },
  // Add more students as needed
];

const admins = [
  { id: 1, name: 'Joyti jadhav', adminEmailID: 'Ashfkjsfks@', Department: 'IT' },
  { id: 2, name: 'Atharv Dingare', adminEmailID: 'Ad244dkhgjdg@', Department: 'CS' },
  { id: 3, name: 'Ria Chodhari', adminEmailID: 'Ahsds43khgjdg@', Department: 'CS' },
  { id: 4, name: 'Rohine Tar', adminEmailID: 'Ahd424dhgjdg@', Department: 'CS' },
  { id: 5, name: 'Jane Smith', adminEmailID: 'Ahdggh332hgjdg@', Department: 'IT' },
  { id: 6, name: 'Jane Smith', adminEmailID: 'Ahdgd7682jdg@', Department: 'ENTC' },
  { id: 7, name: 'Jane Smith', adminEmailID: 'Ahd4546khgjdg@', Department: 'CS' },
  // Add more students as needed
];

const mentors = [
  { id: 1, name: 'Janhavi Rathodr', mentorEmailID: 'sjdhsafjkh@', Department: 'IT' },
  { id: 2, name: 'Rani Sharma', mentorEmailID: 'dranidh@', Department: 'IT' },
  { id: 3, name: 'Vaishali Tor', mentorEmailID: 'vaiddh@', Department: 'ENTC' },
  { id: 4, name: 'Arya Dubbewar', mentorEmailID: '46346fdh@', Department: 'CS' },
  { id: 5, name: 'Shravani Pingale', mentorEmailID: 'shh34dh@', Department: 'ENTC' },
  { id: 6, name: 'Soham Deshpande', mentorEmailID: 'soh24dh@', Department: 'IT' },
  { id: 7, name: 'Shivanjali Thakur', mentorEmailID: 'shi879fdh@', Department: 'CS' },
  // Add more students as needed
];
function App() {
  return (
    <>
     
    <Router>
      <div className="app">
      <AdminDeatails/>
        <Switch>
        <Route exact path="/" render={() => <AdminListTable admins={admins} />} />
          <Route path="/admin/:id" render={(props) => <AdminDeatails />} />
          </Switch>
        <Switch>
          <Route exact path="/" render={() => <MentorListTable mentors={mentors} />} />
          <Route path="/mentor/:id" render={(props) => <MentorApp />} />
          </Switch>
          <Switch>
          <Route exact path="/" render={() => <StudentListTable students={students} />} />
          <Route path="/student/:id" render={(props) => <StudentDetails />} />
        </Switch>
      </div>
    </Router>
    </>

>>>>>>> origin/Admin
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> origin/Admin
