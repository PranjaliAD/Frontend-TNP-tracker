// import React, { useState,useEffect } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';

// function createData(name, gender, contactInfo, email, department) {
//   return { name, gender, contactInfo, email, department };
// }

// // const rows = [
// //   createData('John Doe', 'Male', '123-456-7890', 'john.doe@example.com', 'Engineering'),
// //   createData('Jane Smith', 'Female', '234-567-8901', 'jane.smith@example.com', 'Marketing'),
// //   createData('Alex Johnson', 'Male', '345-678-9012', 'alex.johnson@example.com', 'HR'),
// //   createData('Emily Davis', 'Female', '456-789-0123', 'emily.davis@example.com', 'Finance'),
// //   createData('Michael Brown', 'Male', '567-890-1234', 'michael.brown@example.com', 'Operations'),
// // ];

// export default function UserTable() {
//   const [studentList, setStudentList] = useState([]);


//   useEffect(() => {
//     axios.get('https://placement-internship-tracker-backend.vercel.app/api/admins/student/?adminemailId=U2FsdGVkX1+8/bVan9hIRGMcSvHdUsHKQXTu1Wil6UtcDoKuX+yReJbNZNJajgEL')
//       .then(response => {
//         const data = response.data;
//         // console.log(data)
//         setStudentList(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align="right">Registration Id</TableCell>
//             <TableCell align="right">Prn No.</TableCell>
//             <TableCell align="right">Password</TableCell>
//             <TableCell align="right">Email Id</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {studentList.map((row,index) => (
//             <TableRow key={row.index}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.regId}</TableCell>
//               <TableCell align="right">{row.prnNo}</TableCell>
//               <TableCell align="right">{row.password}</TableCell>
//               <TableCell align="right">{row.instructoremailId}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const createData = (name, gender, contactInfo, email, department) => ({ name, gender, contactInfo, email, department });

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
    <div style={{ maxHeight: 400, overflowY: 'auto' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Registration Id</TableCell>
              <TableCell align="right">Prn No.</TableCell>
              <TableCell align="right">Password</TableCell>
              {/* <TableCell align="right">Email Id</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.regId}</TableCell>
                <TableCell align="right">{row.prnNo}</TableCell>
                <TableCell align="right">{row.password}</TableCell>
                {/* <TableCell align="right">{row.emailId}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentTable;
