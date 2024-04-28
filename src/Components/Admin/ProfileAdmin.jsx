import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState({}); // Use an empty object as initial state
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const storedUserData = localStorage.getItem('userData');
        // if (storedUserData) {
        //   setUserData(JSON.parse(storedUserData));
        // } else {
          const value = localStorage.getItem('adminData');
          const response = await axios.get(`https://placement-internship-tracker-backend.vercel.app/api/admins/?adminemailId=${value}`);
          const user = response.data;
          localStorage.setItem('userData', JSON.stringify(user));
          setUserData(user);
        // }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    };
    fetchData();
  }, []); // Run once on component mount

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border h-96 max-h-full overflow-y-auto">
      {console.log(userData)}
      {userData && ( // Conditional rendering to avoid accessing properties of null
        <>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {userData.name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Admin's Information
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.name}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.adminemailId}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Password
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.password}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Department
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.department}
                </dd>
              </div>
            </dl>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
