import React, { useState, useEffect } from 'react';
import './Studentlist.css'
import axios from 'axios';

const StudentTable = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    axios
      .get('https://placement-internship-tracker-backend.vercel.app/api/admins/student/?adminemailId=U2FsdGVkX1+8/bVan9hIRGMcSvHdUsHKQXTu1Wil6UtcDoKuX+yReJbNZNJajgEL')
      .then((response) => {
        const data = response.data;
        setStudentList(data);
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
            <th align="right">Registration Id</th>
            <th align="right">Prn No.</th>
            <th align="right">Password</th>
            {/* <th align="right">Email Id</th> */}
          </tr>
        </thead>
        <tbody>
          {studentList.map((row, index) => (
            <tr key={index} className="table-row">
              <td>{row.name}</td>
              <td align="right">{row.regId}</td>
              <td align="right">{row.prnNo}</td>
              <td align="right">{row.password}</td>
              {/* <td align="right">{row.emailId}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;