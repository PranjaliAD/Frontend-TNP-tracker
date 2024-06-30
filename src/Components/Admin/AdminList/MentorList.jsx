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

// export default function UserTable() {
//   const [mentorList, setMentorList] = useState([]);

//   useEffect(() => {
//     const value = localStorage.getItem('adminsData');
//     axios.get(`https://placement-internship-tracker-backend.vercel.app/api/admins/instructor/?adminemailId=${value}`)
//       .then(response => {
//         const data = response.data;
//         console.log(data)
//         setMentorList(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const filteredMentorList = mentorList.filter(row => row.students.length > 0); // Filter out entries where students array is empty

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Instructor's Name</TableCell>
//             <TableCell align="right">Student Prn</TableCell>
//             <TableCell align="right">Student Name</TableCell>
//             <TableCell align="right">Instructor Password</TableCell>
//             <TableCell align="right">Email Id</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {filteredMentorList.map((row, index) => (
//             <TableRow key={row._id}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.students[0].prnNo}</TableCell>
//               <TableCell align="right">{row.students[0].name}</TableCell>
//               <TableCell align="right">{row.password}</TableCell>
//               <TableCell align="right">{row.instructoremailId}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';

// const createData = (name, gender, contactInfo, email, department) => ({ name, gender, contactInfo, email, department });

// const MentorTable = () => {
//   const [mentorList, setMentorList] = useState([]);

//   useEffect(() => {
//     const value = localStorage.getItem('adminsData');
//     axios
//       .get(
//         `https://placement-internship-tracker-backend.vercel.app/api/admins/instructor/?adminemailId=${value}`
//       )
//       .then((response) => {
//         const data = response.data;
//         console.log(data);
//         setMentorList(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const filteredMentorList = mentorList.filter((row) => row.students.length > 0); // Filter out entries where students array is empty

//   return (
//     <div style={{ maxHeight: 400, overflowY: 'auto' }}>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Instructor's Name</TableCell>
//               <TableCell align="right">Student Prn</TableCell>
//               <TableCell align="right">Student Name</TableCell>
//               <TableCell align="right">Instructor Password</TableCell>
//               <TableCell align="right">Email Id</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredMentorList.map((row, index) => (
//               <TableRow key={row._id}>
//                 <TableCell component="th" scope="row">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.students[0].prnNo}</TableCell>
//                 <TableCell align="right">{row.students[0].name}</TableCell>
//                 <TableCell align="right">{row.password}</TableCell>
//                 <TableCell align="right">{row.instructoremailId}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default MentorTable;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const createData = (name, gender, contactInfo, email, department) => ({ name, gender, contactInfo, email, department });

const MentorTable = () => {
  const [mentorList, setMentorList] = useState([]);

  useEffect(() => {
    const value = localStorage.getItem('adminsData');
    axios
      .get(
        `https://placement-internship-tracker-backend.vercel.app/api/admins/instructor/?adminemailId=${value}`
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        setMentorList(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredMentorList = mentorList.filter((row) => row.students.length > 0); // Filter out entries where students array is empty

  return (
    <div style={{ maxHeight: 400, overflowY: 'auto' }}>
      <table style={{ minWidth: 650 }}>
        <thead>
          <tr>
            <th>Instructor's Name</th>
            <th align="right">Student Prn</th>
            <th align="right">Student Name</th>
            <th align="right">Instructor Password</th>
            <th align="right">Email Id</th>
          </tr>
        </thead>
        <tbody>
          {filteredMentorList.map((row, index) => (
            <tr key={row._id}>
              <td>{row.name}</td>
              <td align="right">{row.students[0].prnNo}</td>
              <td align="right">{row.students[0].name}</td>
              <td align="right">{row.password}</td>
              <td align="right">{row.instructoremailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MentorTable;
