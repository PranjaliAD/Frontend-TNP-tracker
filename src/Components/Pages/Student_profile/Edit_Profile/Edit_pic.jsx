// import React, { useState } from "react";
// import { Button } from "primereact/button";
// import Avatar from 'react-avatar-edit';
// import img from "../../../../Assets/profile.webp";
// import CryptoJS from "crypto-js";
// import './Edit_pic.css';

// const ProfilePic = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [imgCrop, setImgCrop] = useState(false);
//     const [storeImage, setStoreImage] = useState([]);

//     const onCrop = (view) => {
//         setImgCrop(view);
//     }

//     const onClose = () => {
//         setImgCrop(null);
//         setShowModal(false); // Close the modal
//     }

//     const saveImage = () => {
//         setStoreImage([...storeImage, { imgCrop }]);
//         setShowModal(false); // Close the modal
//     }

//     const profileImageShow = storeImage.map(item => item.imgCrop);

//     return (
//         <div>
//             <div className="profile_img text-center p-4">
//                 <div className="div">
//                     <img
//                         style={{
//                             margin: "40px 0px 0px 50px ",
//                             width: "200px",
//                             height: "200px",
//                             borderRadius: "50%",
//                             objectFit: "cover",
//                         }}
//                         src={profileImageShow.length ? profileImageShow : img}
//                         alt=""
//                         onClick={() => setShowModal(true)}
//                     />
//                 </div>
//             </div>
//             {showModal && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <span className="close" onClick={onClose}>&times;</span>
//                         <h2 className="modal-header">Update Profile</h2>
//                         <div className="modal-body">
//                             <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} />
//                             <Button className="save-button" onClick={saveImage} label="Save" icon="pi pi-check" />
//                         </div>
//                     </div>
//                 </div>
//             )}
//             <Resume/>
//         </div>
//     );
// };

// function Resume() {
//     const [selectedFile, setSelectedFile] = useState(null);
  
//     const handleFileChange = (event) => {
//       const file = event.target.files[0];
//       if (file && file.type === 'application/pdf') {
//         setSelectedFile(file);
//       } else {
//         setSelectedFile(null);
//         alert('Please select a PDF file.');
//       }
//     };
  
//     const handleSubmit1 = () => {
//       if (selectedFile) {
//         // You can perform file upload logic here, like sending the file to a server
//         console.log('Selected file:', selectedFile);
//         alert('File uploaded successfully.');
//       } else {
//         alert('Please select a file before submitting.');
//       }
//     };
  
//     return (
//       <div className="file-upload-container1">
//         {/* <p>Upload Offer letter</p> */}
//         <div className="input-container1">
//           <input id="file-input" className="file-input" type="file" accept=".pdf" onChange={handleFileChange} />
//           <label htmlFor="file-input" className="file-upload-button"> <i className="fas fa-file"></i>  upload Resume</label>
//         </div>
//         <button className="file_upload-button1" onClick={handleSubmit1}>Upload</button>
//       </div>
//     );
//   }
// export default ProfilePic;
// 
// import React, { useState, useEffect } from "react";
// import { Dialog } from "primereact/dialog";
// import { Button } from "primereact/button";
// import Avatar from 'react-avatar-edit';
// import axios from 'axios';
// import CryptoJS from "crypto-js";
// import img from '../../../../Assets/profile.webp';
// import './Edit_pic.css';

// const ProfilePic = () => {
//     const [companies, setCompanies] = useState([]);
//     const [dialogs, setDialogs] = useState(false);
//     const [imgCrop, setImgCrop] = useState(false);
//     const [storeImage, setStoreImage] = useState([]);
//     const [changesMade, setChangesMade] = useState(false); // State to track changes made to profile picture

//     useEffect(() => {
//         const cookies = document.cookie;
//         const secretKey = "oEVzobgA9irHZdNvi5IjEzRotYno6X7h";

//         const decryptedBytes = CryptoJS.AES.decrypt(cookies, secretKey); // Assuming secretKey is defined
//         const decryptedPrn = decryptedBytes.toString(CryptoJS.enc.Utf8);

//         // Fetch the data from the API
//         axios.patch(`https://placement-internship-tracker-backend-mu.vercel.app/api/students/image/?prnNo=${decryptedPrn}`)
//             .then(response => {
//                 console.log('API Response:', response.data); // Log the response data
//                 setCompanies(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching companies:', error);
//             });
//     }, []);

//     const onCrop = (view) => {
//         setImgCrop(view);
//         setChangesMade(true); // Set changesMade to true when image is cropped
//     }

//     const onClose = () => {
//         setImgCrop(null);
//     }

//     const saveImage = () => {
//         setStoreImage([...storeImage, { imgCrop }]);
//         setDialogs(false);
//         setChangesMade(false); // Reset changesMade after saving the image
//     }

//     const profileImageShow = storeImage.map((item, index) => (
//         <img
//             key={index}
//             style={{
//                 margin: "20px 0px 0px 30px ",
//                 width: "200px",
//                 height: "200px",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//             }}
//             src={item.imgCrop}
//             alt=""
//             onClick={() => setDialogs(true)}
//         />
//     ));

//     return (
//         <div>
//             <div className="profile_img text-center p-4">
//                 <div className="div">
//                     <img
//                         style={{
//                             margin: "20px 0px 0px 30px ",
//                             width: "200px",
//                             height: "200px",
//                             borderRadius: "50%",
//                             objectFit: "cover",
//                         }}
//                         src={profileImageShow.length ? profileImageShow : img}
//                         alt=""
//                         onClick={() => setDialogs(true)}
//                     />
//                     <div className="di">
//                         <Dialog
//                             visible={dialogs}
//                             header={() => (
//                                 <p htmlFor="photo" className="text-2xl font-semibold textColor">
//                                     Update Profile photo
//                                 </p>
//                             )}
//                             onHide={() => setDialogs(false)}
//                         >
//                             <div className="confirmation-content flex flex-column align-items-center">
//                                 <div className="flex flex-column align-items-center mt-5 w-12">
//                                     <div className="flex flex-column justify-content-around w-12 mt-4 ">
//                                         <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} />
//                                         {changesMade && <Button onClick={saveImage} label="Save" icon="pi pi-check">Save</Button>} {/* Show the save button only if changes have been made */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </Dialog>
//                     </div>
//                 </div>
//             </div>
//             <Resume/>
//         </div>
//     );
// };

// function Resume() {
//     const [selectedFile, setSelectedFile] = useState(null);
  
//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file && file.type === 'application/pdf') {
//             setSelectedFile(file);
//         } else {
//             setSelectedFile(null);
//             alert('Please select a PDF file.');
//         }
//     };
  
//     const handleSubmit1 = () => {
//         if (selectedFile) {
//             // You can perform file upload logic here, like sending the file to a server
//             console.log('Selected file:', selectedFile);
//             alert('File uploaded successfully.');
//         } else {
//             alert('Please select a file before submitting.');
//         }
//     };
  
//     return (
//         <div className="file-upload-container1">
//             <form action="/stats" encType="multipart/form-data" method="post">
//                 <div className="form-group">
//                     <input type="file" className="form-control-file" name="uploaded_file" />
//                     <input type="text" className="form-control" placeholder="Number of speakers" name="nspeakers" />
//                     <input type="submit" value="Get me the stats!" className="btn btn-default" />            
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default ProfilePic;

import React, { useState } from "react";
import { Button } from "primereact/button";
import Avatar from 'react-avatar-edit';
import img from "../../../../Assets/profile.webp";
import './Edit_pic.css';
import axios from 'axios';
import CryptoJS from "crypto-js";

const ProfilePic = () => {
    const [showModal, setShowModal] = useState(false);
    const [imgCrop, setImgCrop] = useState(null);
    const [storeImage, setStoreImage] = useState([]);
    const [error, setError] = useState(null);

    const onCrop = (view) => {
        setImgCrop(view);
    }

    const onClose = () => {
        setImgCrop(null);
        setShowModal(false);
    }

    const handleImageSave = async () => {
        if (imgCrop) {
            try {
                const cookies = document.cookie;
                const secretKey = "oEVzobgA9irHZdNvi5IjEzRotYno6X7h";
                const decryptedBytes = CryptoJS.AES.decrypt(cookies, secretKey);
                const decryptedPrn = decryptedBytes.toString(CryptoJS.enc.Utf8);
    
                const formData = new FormData();
                formData.append('image', imgCrop.file); // Use imgCrop.file which contains the image file
                formData.append('prnNo', decryptedPrn); // Include prnNo in the formData
    
                const response = await axios.patch(`https://placement-internship-tracker-backend-mu.vercel.app/api/students/image/`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
    
                console.log(response.data);
                setStoreImage([...storeImage, { imgCrop }]);
                setShowModal(false);
            } catch (error) {
                console.error('Error uploading image:', error);
                setError('Failed to save image. Please try again.');
            }
        } else {
            alert('Please crop an image before saving.');
        }
    };

    const profileImageShow = storeImage.map(item => item.imgCrop);

    return (
        <div>
            <div className="profile_img text-center p-4">
                <div className="div">
                    <img
                        style={{
                            margin: "40px 0px 0px 50px ",
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                        src={profileImageShow.length ? profileImageShow : img}
                        alt=""
                        onClick={() => setShowModal(true)}
                    />
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={onClose}>&times;</span>
                        <h2 className="modal-header">Update Profile</h2>
                        <div className="modal-body">
                            <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} />
                            <Button className="save-button" onClick={handleImageSave} label="Save & Upload" icon="pi pi-check" />
                            {error && <div className="error-message">{error}</div>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePic;
