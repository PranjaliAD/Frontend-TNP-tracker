import { useState } from 'react';
import './AdminDeatails.css';
import EditableUserProfile from './EditableUserProfile1';
import UserProfile from './UserProfile1';

function randomFName() {
    return "First Name Admin "
}
function randomLName() {
    return "Last Name Admin "
}
function randomGender() {
    return "female " 
}
function randomContactNumber() {
    return "9842359237 " 
}
function randomEmailID() {
    return "admin@gmail.com" 
}
function randomPassword() {
    return "Vai#93070" 
}
function randomDepartment() {
    return "IT" 
}



function AdminDeatails() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [editMode, setEditMode] = useState(false);

    const [fname, setFName] = useState(randomFName());
    const [lname, setLName] = useState(randomLName());
    const [gender, setGender] = useState(randomGender());
    const [contactnumber, setContactNumber] = useState(randomContactNumber());
    const [emailID, setEmailID] = useState(randomEmailID());
    const [password, setPassword] = useState(randomPassword());
    const [department, setDepartment] = useState(randomDepartment());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());

    const stored = {fname,lname,gender,contactnumber,emailID,password,department, month, day};
    const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setFName(result.fname);
            setLName(result.lname);
            setGender(result.gender);
            setContactNumber(result.contactnumber);
            setEmailID(result.emailID);
            setPassword(result.password);
            setDepartment(result.department);
            // setMonth(result.month);
            // setDay(result.day);
        }        
        setEditMode(false);
    }

    return (
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
    );
}

export default AdminDeatails;