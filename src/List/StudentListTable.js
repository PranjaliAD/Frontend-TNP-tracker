import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentList.css'
function StudentListTable({ students }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStudents = students.filter(student =>
    student.PRNno.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [studentList, setStudentList] = useState(students);

  const addStudent = () => {
    const name = prompt('Enter student name:');
    const rollNumber = prompt('Enter student roll number:');
    const PRNno = prompt('Enter PRN number:');

    if (name && rollNumber && PRNno) {
      const newStudent = {
        id: studentList.length + 1,
        name: name,
        rollNumber: rollNumber,
        PRNno: PRNno,
      };
      setStudentList([...studentList, newStudent]);
    } else {
      alert('Please provide all details for the student.');
    }
  };


  return (
    <div className="student-list">
      <h2> All Student List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by PRN..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {filteredStudents.length === 0 && searchQuery !== '' && (
        <p>No students found with the PRN no "{searchQuery}"</p>
      )}
      <button onClick={addStudent}>Add Student</button>
      <table>
        <thead>
          <tr>
            <th >Name</th>
            <th>Roll Number</th>
            <th>PRN no</th>
          </tr>
        </thead>
        <tbody>
           {filteredStudents.map(student => (
            <tr key={student.id}>
              <td><Link to={`/student/${student.id}`} className='name'>{student.name}</Link></td>
              <td>{student.rollNumber}</td>
              <td>{student.PRNno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentListTable;