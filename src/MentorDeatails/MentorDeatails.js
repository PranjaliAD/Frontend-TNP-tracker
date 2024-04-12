import { useState } from 'react';
import './MentorDeatails.css';
import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile';
// Sample data of students
function randomFName() {
    return "First Name Mentor "
}
function randomLName() {
    return "Last Name Mentor "
}
function randomGender() {
    return "female "
}
function randomContactNumber() {
    return "6478383889 "
}
function randomEmailID() {
    return "mentor@gmail.com"
}
function randomPassword() {
    return "Vai#93070"
}
function randomDepartment() {
    return "IT"
}
function randomImage() {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUzn7-qinvq-jbUgQWNL-OfnXUFXfxbtwMs6-Utey3A&s"
}
function randomBgimage() {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUzn7-qinvq-jbUgQWNL-OfnXUFXfxbtwMs6-Utey3A&s"
}


function MentorDeatails() {
    const now = new Date(Date.now());


    const [editMode, setEditMode] = useState(false);

    const [fname, setFName] = useState(randomFName());
    const [lname, setLName] = useState(randomLName());
    const [gender, setGender] = useState(randomGender());
    const [contactnumber, setContactNumber] = useState(randomContactNumber());
    const [emailID, setEmailID] = useState(randomEmailID());
    const [password, setPassword] = useState(randomPassword());
    const [department, setDepartment] = useState(randomDepartment());
    const [image, setImage] = useState(randomImage());
    const [bgimage, setBgimage] = useState(randomBgimage());
   

    const stored = { fname, lname, gender, contactnumber, emailID, password, image, bgimage, department };

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setFName(result.fname);
            setLName(result.lname);
            setGender(result.gender);
            setContactNumber(result.contactnumber);
            setEmailID(result.emailID);
            setImage(result.image);
            setBgimage(result.bgimage);
            setPassword(result.password);
            setDepartment(result.department);
            
        }
        setEditMode(false);
    }

    return (
        <>
            <div className="container">

                <div className="App">
                    {
                        editMode
                            ? <>
                                <EditableUserProfile
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}
                                />
                            </>
                            : <>
                                <UserProfile
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                                />

                            </>
                    }

                </div>

            </div>
            
        </>
    );
}

export default MentorDeatails;