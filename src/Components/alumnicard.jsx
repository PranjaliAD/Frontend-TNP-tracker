// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// // import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// // function YourComponent({ imageSrc, name, jobTitle, email, phone, linkedinlink }) {
// //     return (
// //         <div className="  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 border border-24a">
// //             <div className="name-div">
// //             <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
// //                     {name}
// //             </h4>
// //             </div>
// //             <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border h-1/2 w-1/2">
// //                 <img src={imageSrc} alt="profile-picture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />   
// //             </div>
            
// //             <div className="p-6 text-center flex-grow">
// //                 {/* <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
// //                     {name}
// //                 </h4> */}
// //                 <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
// //                     {jobTitle}
// //                 </p>
// //                 <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed ">
// //                     <div className="font-bold">Department : </div>{phone}
// //                 </p>
// //                 <div className="flex justify-center p-2 gap-2 m-4">
// //                     <a href={linkedinlink} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
// //                         <FontAwesomeIcon icon={faLinkedin} />
// //                     </a>
// //                     <a href={`mailto:${email}`} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-red-600 to-red-400">
// //                         <FontAwesomeIcon icon={faEnvelope} />
// //                     </a>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default YourComponent;
// import React from 'react';
// function ProfileCard({ imageSrc, name, jobTitle, email, phone, linkedinlink }) {
//     return (
//         <div className="flex items-center h-screen w-50rem justify-center">
//             <div className="max-w-xs">
//                 <div className="bg-white shadow-xl rounded-lg py-3">
//                     <div className="photo-wrapper p-2">
//                         <img className="w-32 h-32 rounded-full mx-auto" src={imageSrc} alt="John Doe" />
//                     </div>
//                     <div className="p-2">
//                         {/* <h3 className="text-center text-xl text-gray-900 font-medium leading-8">John Doe</h3> */}
//                         <div className="text-center text-gray-400 text-xs font-semibold">
//                             <p>{name}</p>
//                         </div>
//                         <table className="text-xs my-3">
//                             <tbody>
//                                 <tr>
//                                     <td className="px-2 py-2 text-gray-500 font-semibold">Job</td>
//                                     <td className="px-2 py-2">{jobTitle}</td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
//                                     <td className="px-2 py-2">{phone}</td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
//                                     <td className="px-2 py-2">{email}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <div className="text-center my-3">
//                             <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href={linkedinlink}>View Profile</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default ProfileCard;
import React from 'react';

function ProfileCard({ imageSrc, name, jobTitle, email, phone, linkedinlink }) {
    return (
        <div className="flex items-center justify-center alumni-card">
            <div >
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-32 h-32 rounded-full mx-auto" src={imageSrc} alt="Profile" />
                    </div>
                    <div className="p-2">
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>{name}</p>
                        </div>
                        <table className="text-xs my-3">
                            <tbody>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Job</td>
                                    <td className="px-2 py-2">{jobTitle}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                    <td className="px-2 py-2">{phone}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td className="px-2 py-2">{email}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-center my-3">
                            <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href={linkedinlink}>View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
