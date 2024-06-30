import React, { useState, useEffect } from 'react';
import './AdminList.css'
import axios from 'axios';

const UserTable = () => {
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    const value = localStorage.getItem('adminData');
    axios
      .get(
        `https://placement-internship-tracker-backend.vercel.app/api/admins/admin/?adminemailId=${value}`
      )
      .then((response) => {
        const data = response.data;
        setAdminList(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="scrollable-table">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Email Id</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {adminList.map((row, index) => (
            <tr key={row.name} className="table-row">
              <td>{row.name}</td>
              <td>{row.password}</td>
              <td>{row.adminemailId}</td>
              <td>{row.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;