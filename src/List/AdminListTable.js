import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminListTable.css'
function AdminListTable({ admins }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAdmin = admins.filter(admin =>
    admin.adminEmailID.toLowerCase().includes(searchQuery.toLowerCase())
  );
    const [adminList, setAdminList] = useState(admins);

    const addAdmin = () => {
      const name = prompt('Enter admin name:');
      const adminEmailID = prompt('Enter admin email:');
      const Department = prompt('Enter Department:');
  
      if (name && adminEmailID && Department) {
        const newAdmin = {
          id: adminList.length + 1,
          name: name,
            adminEmailID: adminEmailID,
          Department: Department,
        };
        setAdminList([...adminList, newAdmin]);
      } else {
        alert('Please provide all details for the Admin.');
      }
    };
  return (
    <div className="admin-list">
      <h2> All Admin List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Email ID..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {filteredAdmin.length === 0 && searchQuery !== '' && (
        <p>No Admin found with the  Email ID "{searchQuery}"</p>
      )}
      <button onClick={addAdmin}>Add Admin</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Admin Email ID</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmin.map(admin => (
            <tr key={admin.id}>
              <td><Link to={`/admin/${admin.id}`} className='name'>{admin.name}</Link></td>
              <td>{admin.adminEmailID}</td>
              <td>{admin.Department}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default AdminListTable;
