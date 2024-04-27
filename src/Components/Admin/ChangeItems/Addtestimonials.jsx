// import React ,{useState} from 'react';
// import axios from 'axios';
// const RegistrationForm = ({ addTestimonial, closeForm }) => {
//   const [name, setName] = useState('');
//   const [yearOfPassout, setYearOfPassOut] = useState('');
//   const [company, setCompanyName] = useState('');
//   const [testimonial, setTestimonial] = useState('');
//   const [department, setDepartment] = useState('');
//   const [alumniemailId, setEmailId] = useState('');
//   const [linkedin, setLinkedIn] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const value = localStorage.getItem('adminsData');
//       const response = await axios.post(`https://placement-internship-tracker-backend.vercel.app/api/admins/alumni/?adminemailId=${value}`, {
//         name,
//         yearOfPassout,
//         company,
//         testimonial,
//         department,
//         alumniemailId,
//         linkedin
//       });

//       addTestimonial(response.data); // Add the new announcement to the list
//       setName(''); // Clear the form fields
//       setYearOfPassOut('');
//       setCompanyName('');
//       setTestimonial('');
//       setDepartment('');
//       setEmailId('');
//       setLinkedIn('');
//       closeForm(); // Close the form
//     } catch (error) {
//       console.error('Error adding testimonial:', error);
//     }
//   };
//   return (
//     <div className="flex justify-center items-center">
//       <form className="max-w-sm mx-auto border border-gray-300 p-4 rounded-lg" onSubmit={handleSubmit}>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
//           <input type="text" id="Title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required 
//           value={name}
//           onChange={(e) => setName(e.target.value)}/>
//         </div>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year Of Pass Out</label>
//           <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
//           value={yearOfPassout}
//           onChange={(e) => setYearOfPassOut(e.target.value)}/>
//         </div>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
//           <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
//           value={company}
//           onChange={(e) => setCompanyName(e.target.value)}/>
//         </div>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Testimonial</label>
//           <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
//           value={testimonial}
//           onChange={(e) => setTestimonial(e.target.value)}/>
//         </div>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
//           <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}/>
//         </div>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email-Id</label>
//           <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
//           value={alumniemailId}
//           onChange={(e) => setEmailId(e.target.value)}/>
//         </div>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LinkedIn-link</label>
//           <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
//           value={linkedin}
//           onChange={(e) => setLinkedIn(e.target.value)}/>
//         </div>
//         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ addTestimonial, closeForm }) => {
  const [name, setName] = useState('');
  const [yearOfPassout, setYearOfPassOut] = useState('');
  const [company, setCompanyName] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [department, setDepartment] = useState('');
  const [alumniemailId, setEmailId] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [image, setImage] = useState(null); // State for the image file

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const value = localStorage.getItem('adminsData');
      const formData = new FormData();
      formData.append('name', name);
      formData.append('yearOfPassout', yearOfPassout);
      formData.append('company', company);
      formData.append('testimonial', testimonial);
      formData.append('department', department);
      formData.append('alumniemailId', alumniemailId);
      formData.append('linkedin', linkedin);
      formData.append('image', image); // Append the image file to the form data

      const response = await axios.post(
        `https://dp1d9vc7-5000.inc1.devtunnels.ms/api/admins/alumni?adminemailId=${value}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      addTestimonial(response.data); // Add the new announcement to the list
      setName(''); // Clear the form fields
      setYearOfPassOut('');
      setCompanyName('');
      setTestimonial('');
      setDepartment('');
      setEmailId('');
      setLinkedIn('');
      setImage(null);
      closeForm(); // Close the form
    } catch (error) {
      console.error('Error adding testimonial:', error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className="max-w-sm mx-auto border border-gray-300 p-4 rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="John Doe"
            required
          />
        </div>
        {/* Add other input fields here */}
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year Of Pass Out</label>
          <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
          value={yearOfPassout}
          onChange={(e) => setYearOfPassOut(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
          <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
          value={company}
          onChange={(e) => setCompanyName(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Testimonial</label>
          <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
          value={testimonial}
          onChange={(e) => setTestimonial(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
          <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
          value={department}
          onChange={(e) => setDepartment(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email-Id</label>
          <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
          value={alumniemailId}
          onChange={(e) => setEmailId(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LinkedIn-link</label>
          <input type="text" id="content-announcement" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required 
          value={linkedin}
          onChange={(e) => setLinkedIn(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image (PNG only)</label>
          <input
            type="file"
            id="alumniimage"
            accept=".png"
            // value = {image}
            onChange={(e) => setImage(e.target.files[0])} // Update image state with the selected file
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
