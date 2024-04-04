import React, { useState, useRef } from "react";
//npm install primereact
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import img from "./profile.jpg";
// npm i react-avatar-edit
import Avatar from 'react-avatar-edit';
import './E_Pic.css';
const ProfilePic = () => {
    const [dialogs, setdialogs] = useState(false);
    const [imgCrop, setimgCrop] = useState(false)
    const [storeImage, setstoreImage] = useState([])

    const onCrop = (view) => {
        setimgCrop(view)
    }
    const onClose = () => {
        setimgCrop(null)
    }
    const saveImage = () => {
        setstoreImage([...storeImage, { imgCrop }])
        setdialogs(false)
    }

    const profileImageShow = storeImage.map(item => item.imgCrop)
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
                        onClick={() => setdialogs(true)}
                    />
                    <div className="di">
                        <Dialog
                            visible={dialogs}
                            header={() => (
                                <p htmlFor="photo" className="text-2xl font-semibold textColor">
                                    Update Profile
                                </p>
                            )}
                            onHide={() => setdialogs(false)}

                        >

                            <div className="confirmation-content flex flex-column align-items-center">

                                <div className="flex flex-column align-items-center mt-5 w-12">

                                    <div className="flex flex-column justify-content-around w-12 mt-4 ">

                                        <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} />
                                        <Button onClick={saveImage} label="Save" icon="pi pi-check" />
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
            <Resume/>
        </div>
    );
};
function Resume() {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file && file.type === 'application/pdf') {
        setSelectedFile(file);
      } else {
        setSelectedFile(null);
        alert('Please select a PDF file.');
      }
    };
  
    const handleSubmit1 = () => {
      if (selectedFile) {
        // You can perform file upload logic here, like sending the file to a server
        console.log('Selected file:', selectedFile);
        alert('File uploaded successfully.');
      } else {
        alert('Please select a file before submitting.');
      }
    };
  
    return (
      <div className="file-upload-container1">
        {/* <p>Upload Offer letter</p> */}
        <div className="input-container1">
          <input id="file-input" className="file-input" type="file" accept=".pdf" onChange={handleFileChange} />
          <label htmlFor="file-input" className="file-upload-button"> <i className="fas fa-file"></i>  upload Resume</label>
        </div>
        <button className="file_upload-button1" onClick={handleSubmit1}>Upload</button>
      </div>
    );
  }
export default ProfilePic;