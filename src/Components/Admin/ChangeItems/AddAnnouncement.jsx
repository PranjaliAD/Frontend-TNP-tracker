// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = ({ addAnnouncement }) => {
//   const [headline, setHeadline] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const value = localStorage.getItem('announcementData');
//       const response = await axios.post(`https://placement-internship-tracker-backend.vercel.app/api/announcements/?announcement=${value}`, {
//         headline,
//         description,
//       });

//       addAnnouncement(response.data); // Add the new announcement to the list
//       setHeadline(''); // Clear the form fields
//       setDescription('');
//     } catch (error) {
//       console.error('Error adding announcement:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <form className="max-w-sm mx-auto border border-gray-300 p-4 rounded-lg" onSubmit={handleSubmit}>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title of Announcement</label>
//           <input
//             type="text"
//             id="Title"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             placeholder="name@flowbite.com"
//             required
//             value={headline}
//             onChange={(e) => setHeadline(e.target.value)}
//           />
//         </div>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content Of Announcement</label>
//           <input
//             type="text"
//             id="content-announcement"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             required
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = ({ addAnnouncement, closeForm }) => {
//   const [headline, setHeadline] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const value = localStorage.getItem('adminsData');
//       const response = await axios.post(`https://placement-internship-tracker-backend.vercel.app/api/admins/announcement/?adminemailId=${value}`, {
//         headline,
//         description,
//       });

//       addAnnouncement(response.data); // Add the new announcement to the list
//       setHeadline(''); // Clear the form fields
//       setDescription('');
//       closeForm(); // Close the form
//     } catch (error) {
//       console.error('Error adding announcement:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <form className="max-w-sm mx-auto border border-gray-300 p-4 rounded-lg" onSubmit={handleSubmit}>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title of Announcement</label>
//           <input
//             type="text"
//             id="Title"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             placeholder="name@flowbite.com"
//             required
//             value={headline}
//             onChange={(e) => setHeadline(e.target.value)}
//           />
//         </div>
//         <div className="mb-5">
//           <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content Of Announcement</label>
//           <input
//             type="text"
//             id="content-announcement"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             required
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ addAnnouncement, closeForm }) => {
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  // const toggleAddAnnouncement = () => {
  //   setIsAddAnnouncementVisible(!isAddAnnouncementVisible);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const value = localStorage.getItem('adminsData');
      const response = await axios.post(`https://placement-internship-tracker-backend.vercel.app/api/admins/announcement/?adminemailId=${value}`, {
        headline,
        description,
      });

      addAnnouncement(response.data); // Add the new announcement to the list
      setHeadline(''); // Clear the form fields
      setDescription('');
      closeForm(); // Close the form
    } catch (error) {
      console.error('Error adding announcement:', error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className="max-w-sm mx-auto border border-gray-300 p-4 rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title of Announcement</label>
          <input
            type="text"
            id="Title"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content Of Announcement</label>
          <input
            type="text"
            id="content-announcement"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
