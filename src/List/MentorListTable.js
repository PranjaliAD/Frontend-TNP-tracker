import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MentorListTable.css'
function MentorListTable({ mentors }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMentor = mentors.filter(mentor =>
    mentor.mentorEmailID.toLowerCase().includes(searchQuery.toLowerCase())
  );
    const [mentorList, setMentorList] = useState(mentors);

    const addMentor = () => {
      const name = prompt('Enter mentor name:');
      const mentorEmailID = prompt('Enter mentor email:');
      const Department = prompt('Enter Department:');
  
      if (name && mentorEmailID && Department) {
        const newMentor = {
          id: mentorList.length + 1,
          name: name,
            mentorEmailID: mentorEmailID,
          Department: Department,
        };
        setMentorList([...mentorList, newMentor]);
      } else {
        alert('Please provide all details for the Mentor.');
      }
    };
  return (
    <div className="mentor-list">
      <h2>Mentor List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Email ID..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {filteredMentor.length === 0 && searchQuery !== '' && (
        <p>No Mentor found with the Email ID "{searchQuery}"</p>
      )}
      <button onClick={addMentor}>Add Mentor</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mentor Email ID</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredMentor.map(mentor => (
            <tr key={mentor.id}>
              <td><Link to={`/mentor/${mentor.id}`} className='name'>{mentor.name}</Link></td>
              <td>{mentor.mentorEmailID}</td>
              <td>{mentor.Department}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default MentorListTable;
