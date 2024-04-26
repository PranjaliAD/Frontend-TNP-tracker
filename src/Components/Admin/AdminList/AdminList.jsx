import React, { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function createData(name,  password,email, department) {
  return { name, password,email, department };
}


export default function UserTable() {
  const [adminList, setAdminList] = useState([]);


  useEffect(() => {
    const value = localStorage.getItem('adminsData');
    axios.get(`https://placement-internship-tracker-backend.vercel.app/api/admins/admin/?adminemailId=${value}`)
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
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {/* <TableCell align="right">Gender</TableCell> */}
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminList.map((row,index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {/* <TableCell align="right">{row.gender}</TableCell> */}
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">{row.adminemailId}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
