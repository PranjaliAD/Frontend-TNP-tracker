// import React from 'react';

// const UploadCsvAdminForm = () => {
//   // Add logic for uploading CSV file of admin here
//   return (
//     <div>
//       <h1>Upload CSV File of Admin</h1>
//       {/* Add form elements here */}
//     </div>
//   );
// };

// export default UploadCsvAdminForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadCsvAdminForm = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleFileUpload = async () => {
//     if (!file) {
//       alert('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('admin', file);

//     try {
//         const value = localStorage.getItem('adminsData');
//       const response = await axios.post(`https://placement-internship-tracker-backend.vercel.app/api/admins/admin?adminemailId=${value}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Upload successful:', response.data);
//       // Add any success message or action here
//     } catch (error) {
//       console.error('Upload failed:', error);
//       // Add any error handling logic here
//     }
//   };

//   return (
//     <div>
//       <h1>Upload CSV File of Admin</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload}>Submit</button>
//     </div>
//   );
// };

// export default UploadCsvAdminForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// function UploadCsvAdminForm() {
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append('admin', file);

//     try {
//         const value = localStorage.getItem('adminsData');
//       const response = await axios.post(`https://dp1d9vc7-5000.inc1.devtunnels.ms/api/admins/admin?adminemailId=${value}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Upload successful:', response.data);
//       // Optionally, reset the file input field
//       event.target.value = null;
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         setErrorMessage('Resource not found. Please check the API endpoint.');
//       } else {
//         setErrorMessage('Error uploading file. Please try again.');
//       }
//       console.error('Error uploading file:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload CSV File</h2>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <input type="file" onChange={handleFileUpload} />
//     </div>
//   );
// }

// export default UploadCsvAdminForm;

import React, { useState } from 'react';
import axios from 'axios';

function UploadCsvMentorForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setErrorMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('alumni', selectedFile);

    try {
      const value = localStorage.getItem('adminData');
      const response = await axios.post(`https://placement-internship-tracker-backend.vercel.app/api/admins/alumni?adminemailId=${value}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful:', response.data);
      // Optionally, reset the file input field
      setSelectedFile(null);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Resource not found. Please check the API endpoint.');
      } else {
        setErrorMessage('Error uploading file. Please try again.');
      }
      console.error('Error uploading file:', error.message);
    }
  };

  return (
    <div>
      <h2>Upload CSV File</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UploadCsvMentorForm;
