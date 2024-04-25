import React, { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function createData(name, gender, contactInfo, email, department) {
  return { name, gender, contactInfo, email, department };
}

// const rows = [
//   createData('John Doe', 'Male', '123-456-7890', 'john.doe@example.com', 'Engineering'),
//   createData('Jane Smith', 'Female', '234-567-8901', 'jane.smith@example.com', 'Marketing'),
//   createData('Alex Johnson', 'Male', '345-678-9012', 'alex.johnson@example.com', 'HR'),
//   createData('Emily Davis', 'Female', '456-789-0123', 'emily.davis@example.com', 'Finance'),
//   createData('Michael Brown', 'Male', '567-890-1234', 'michael.brown@example.com', 'Operations'),
// ];

export default function UserTable() {
  const [adminList, setAdminList] = useState([]);


  useEffect(() => {
    axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/admins/admin/?adminemailId=U2FsdGVkX1+8/bVan9hIRGMcSvHdUsHKQXTu1Wil6UtcDoKuX+yReJbNZNJajgEL')
      .then(response => {
        const data = response.data;
        // console.log(data)
        setAdminList(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Contact Info</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminList.map((row,index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.contactNumber}</TableCell>
              <TableCell align="right">{row.adminemailId}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
