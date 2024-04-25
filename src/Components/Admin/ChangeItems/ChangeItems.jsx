import React, { useState } from 'react';
import Addannouncementform from './AddAnnouncement';
import Addtestimonialform from './Addtestimonials';
import AddCoordinatorsform from './AddCoordinators';

const ChangeItems = () => {
  const [isAddAnnouncementVisible, setIsAddAnnouncementVisible] = useState(false);
  const [isAddTestimonialVisible, setIsAddTestimonialVisible] = useState(false);
  const [isAddCoordinatorVisible, setIsAddCoordinatorVisible] = useState(false);
  const [isUploadCsvAdminVisible, setIsUploadCsvAdminVisible] = useState(false);
  const [isUploadCsvMentorsVisible, setIsUploadCsvMentorsVisible] = useState(false);
  const [isUploadCsvStudentsVisible, setIsUploadCsvStudentsVisible] = useState(false);

  const toggleAddAnnouncement = () => {
    setIsAddAnnouncementVisible(!isAddAnnouncementVisible);
  };

  const toggleAddTestimonial = () => {
    setIsAddTestimonialVisible(!isAddTestimonialVisible);
  };

  const toggleAddCoordinator = () => {
    setIsAddCoordinatorVisible(!isAddCoordinatorVisible);
  };

  const toggleUploadCsvAdmin = () => {
    setIsUploadCsvAdminVisible(!isUploadCsvAdminVisible);
  };

  const toggleUploadCsvMentors = () => {
    setIsUploadCsvMentorsVisible(!isUploadCsvMentorsVisible);
  };

  const toggleUploadCsvStudents = () => {
    setIsUploadCsvStudentsVisible(!isUploadCsvStudentsVisible);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle the file upload logic here
    console.log('Selected file:', file);
  };

  return (
    <>
      <div className='bg-white overflow-hidden shadow rounded-lg border w-96 h-96 max-h-full overflow-y-auto'>
        {/* Existing code for adding announcements, testimonials, coordinators */}
<div className="flex items-center justify-between py-3 sm:py-5 sm:px-6 border-b w-96">
          <dt className="text-lg font-medium text-gray-500">
            Add Announcements 
          </dt>
          <button onClick={toggleAddAnnouncement} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
            Click here
          </button>
        </div>
        <div className="flex items-center justify-between py-3 sm:py-5 sm:px-6 border-b w-96">
          <dt className="text-lg font-medium text-gray-500">
            Add Testimonials 
          </dt>
          <button onClick={toggleAddTestimonial} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
            Click here
          </button>
        </div>
        <div className="flex items-center justify-between py-3 sm:py-5 sm:px-6 border-b w-96">
          <dt className="text-lg font-medium text-gray-500">
            Add Coordinators 
          </dt>
          <button onClick={toggleAddCoordinator} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
            Click here
          </button>
        </div>
        {/* Add csv file of Admin */}
        <div className="flex items-center justify-between py-3 sm:py-5 sm:px-6 border-b w-96">
          <dt className="text-lg font-medium text-gray-500">
            Add csv file of Admin
          </dt>
          <button onClick={toggleUploadCsvAdmin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
            Click here
          </button>
        </div>
        {/* Add csv file of Mentors */}
        <div className="flex items-center justify-between py-3 sm:py-5 sm:px-6 border-b w-96">
          <dt className="text-lg font-medium text-gray-500">
            Add csv file of Mentors 
          </dt>
          <button onClick={toggleUploadCsvMentors} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
            Click here
          </button>
        </div>
        {/* Add csv file of Students */}
        <div className="flex items-center justify-between py-3 sm:py-5 sm:px-6 border-b w-96">
          <dt className="text-lg font-medium text-gray-500">
            Add csv file of Students
          </dt>
          <button onClick={toggleUploadCsvStudents} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
            Click here
          </button>
        </div>
        {/* Other items */}
      </div>
      {/* Upload CSV file form for Admin */}
      {isUploadCsvAdminVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <input type="file" onChange={handleFileUpload} />
            <button onClick={toggleUploadCsvAdmin} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
              Submit
            </button>
          </div>
        </div>
      )}
      {/* Upload CSV file form for Mentors */}
      {isUploadCsvMentorsVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <input type="file" onChange={handleFileUpload} />
            <button onClick={toggleUploadCsvMentors} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
              Submit
            </button>
          </div>
        </div>
      )}
      {/* Upload CSV file form for Students */}
      {isUploadCsvStudentsVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <input type="file" onChange={handleFileUpload} />
            <button onClick={toggleUploadCsvStudents} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
              Submit
            </button>
          </div>
        </div>
      )}
      {/* Add announcement form */}
      {isAddAnnouncementVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Addannouncementform />
            <button onClick={toggleAddAnnouncement} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
              Close
            </button>
          </div>
        </div>
      )}
      {/* Add testimonial form */}
      {isAddTestimonialVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Addtestimonialform />
            <button onClick={toggleAddTestimonial} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
              Close
            </button>
          </div>
        </div>
      )}
      {/* Add coordinator form */}
      {isAddCoordinatorVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <AddCoordinatorsform />
            <button onClick={toggleAddCoordinator} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangeItems;
