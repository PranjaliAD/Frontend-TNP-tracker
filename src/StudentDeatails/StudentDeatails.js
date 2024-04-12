import { useState } from 'react';
// import './AdminDeatails.css';
import EditableUserProfile1 from '../StudentDeatails/EditableUserProfile1';
import UserProfile1 from './UserProfile1';
function randomPRNno() {
    return "722172134"
}
function randomMentorEmailID() {
    return "mentor@gmail.com "
}
function randomFName() {
    return "First Name student "
}
function randomLName() {
    return "Last Name student "
}
function randomGender() {
    return "female " 
}
function randomContactNumber() {
    return "678365883 " 
}
function randomEmailID() {
    return "student@gmail.com" 
}
function randomPassword() {
    return "Vai#93070" 
}
function randomDepartment() {
    return "IT" 
}
function randomAbout() {
    return "I am Student of PICT" 
}
function randomRegID() {
    return "I2K211034" 
}
function randomSkills() {
    return "Python DSA DBMS " 
}
function randomLinkedIN() {
    return "vaishnavi_deshmukh" 
}
function randomGithub() {
    return "Vaishnav@12" 
}
function randomImage() {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s" 
}
function randomBgimage() {
    return "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg" 
}
function randomResume() {
    return "https://drive.google.com/file/d/1LDRlyZaZTF-bxHjBDEiL2obMxYHtf3YT/view?usp=sharing" 
}
function randomInternshipStatus() {
    return "Intern" 
}
function randomPlacementStatus() {
    return "Unplaced" 
}
function randomCGPA() {
    return "8.7" 
}
function randomYear() {
    return "3 rd" 
}
function StudentDeatails() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [editMode, setEditMode] = useState(false);

    const [prnno, setPRNno] = useState(randomPRNno());
    const [fname, setFName] = useState(randomFName());
    const [lname, setLName] = useState(randomLName());
    const [gender, setGender] = useState(randomGender());
    const [contactnumber, setContactNumber] = useState(randomContactNumber());
    const [emailID, setEmailID] = useState(randomEmailID());
    const [mentoremailID, setMentorEmailID] = useState(randomMentorEmailID());
    const [password, setPassword] = useState(randomPassword());
    const [department, setDepartment] = useState(randomDepartment());
    const [about, setAbout] = useState(randomAbout());
    const [regID, setRegID] = useState(randomRegID());
    const [skills, setSkills] = useState(randomSkills());
    const [linkedIN, setLinkedIN] = useState(randomLinkedIN());
    const [github, setGithub] = useState(randomGithub());
    const [image, setImage] = useState(randomImage());
    const [bgimage, setBgimage] = useState(randomBgimage());
    const [resume, setResume] = useState(randomResume());
    const [cgpa, setCGPA] = useState(randomCGPA());
    const [internshipStatus, setInternshipStatus] = useState(randomInternshipStatus());
    const [placementStatus, setPlacementStatus] = useState(randomPlacementStatus());
    const [year, setYear] = useState(randomYear());

    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());

    const stored = {prnno,fname,lname,gender,contactnumber,emailID,mentoremailID,password,department,about,regID,skills,linkedIN,github,image,bgimage,resume,cgpa,internshipStatus,placementStatus,year, month, day};
    const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setPRNno(result.prnno);
            setFName(result.fname);
            setLName(result.lname);
            setGender(result.gender);
            setContactNumber(result.contactnumber);
            setEmailID(result.emailID);
            setDepartment(result.department);
            setMentorEmailID(result.mentoremailID);
            setPassword(result.password);
            setAbout(result.department);
            setRegID(result.regID);
            setSkills(result.skills);
            setLinkedIN(result.linkedIN);
            setGithub(result.github);
            setImage(result.image);
            setBgimage(result.bgimage);
            setResume(result.resume);
            setInternshipStatus(result.internshipStatus);
            setPlacementStatus(result.placementStatus);
            setCGPA(result.cgpa);
            setYear(result.year);
            setMonth(result.month);
            setDay(result.day);
        }        
        setEditMode(false);
    }

    return (
        <div className="container">
            <div className="App">                 
                {
                    editMode
                        ? <>
                            <EditableUserProfile1
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}                            
                            />
                        </>
                        : <>
                            <UserProfile1
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
        </div>
    );
}

export default StudentDeatails;