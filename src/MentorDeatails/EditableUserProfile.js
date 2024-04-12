import { useState, useEffect } from 'react';
import Group from './Group1';
import { months } from '../tools';

function renderMonthOptions() {
    return months.getMonths().map( (m, i) => {
        return <option
            key={i}
            value={i}
        >
            {m.shortName}
        </option>
    });
}

function bound(value, floor, ceil) {
    return Math.min(ceil, Math.max(value, floor));
}

export default function EditableUserProfile1({
    stored,
    editCompleteCallback
}) {

    console.log("Edit User Profile");

    const [fname, setFName] = useState(stored.fname);
    const [lname, setLName] = useState(stored.lname);
    const [gender, setGender] = useState(stored.gender);
    const [contactnumber, setContactNumber] = useState(stored.contactnumber);
    const [emailID, setEmailID] = useState(stored.emailID);
    const [password, setPassword] = useState(stored.password);
    const [image, setImage] = useState(stored.image);
    const [bgimage, setBgimage] = useState(stored.bgimage);
    const [department, setDepartment] = useState(stored.department);
    const [month, setMonth] = useState(stored.month);
    const [day, setDay] = useState(stored.day);
   

    const maxDay = months.getMaxDays(month);

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({fname,lname,gender,contactnumber,emailID,image,bgimage,password,department, month, day});
    }

    useEffect(() => {
        setDay(bound(day, 1, maxDay));
    }, [month]);


    return <>
        <Group >            
            <h3>First Name:</h3>
            <input
                type='text'
                value={fname}
                onChange={e => setFName(e.target.value)}
            />
            <h3>Last Name:</h3>
            <input
                type='text'
                value={lname}
                onChange={e => setLName(e.target.value)}
            />             
        </Group>
        <Group>            
            <h3>gender:</h3>
            <>
            <input type="radio" id="radio-2" name="gender" value='Male' onChange={e => setGender(e.target.value)}/>
                            <label for="radio-2" class="radio-label">Male</label>
                            <input type="radio" id="radio-3" name="gender" value='Female' onChange={e => setGender(e.target.value)}/>
                            <label for="radio-3" class="radio-label">Female</label>
                            
                            </>
             <h3>contact number:</h3>
            <input
                type='number'
                value={contactnumber}
                onChange={e => setContactNumber(e.target.value)}
            />            
        </Group>
        <Group>            
            <h3>email ID:</h3>
            <input
                type='text'
                value={emailID}
                onChange={e => setEmailID(e.target.value)}
            />  
             <h3>password:</h3>
            <input
                type='text'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />           
        </Group>
        <Group>            
            <h3>image:</h3>
            <input
                type='text'
                value={image}
                onChange={e => setImage(e.target.value)}
            />  
             <h3>bgimage:</h3>
            <input
                type='text'
                value={bgimage}
                onChange={e => setBgimage(e.target.value)}
            />    
             <h3>department:</h3>
            <input
                type='text'
                value={department}
                onChange={e => setDepartment(e.target.value)}
            />           
        </Group>
        {/* <Group>            
            <h3>Birthday:</h3>            
            
            <select
                value={month}
                onChange={e => setMonth(bound(e.target.value, 0, 11))}
            >
                {renderMonthOptions()}
            </select>
            <input
                type='number'
                value={day}
                onChange={e => setDay(bound(e.target.value, 1, maxDay))}
                style={{width: "50px"}}
            />
        </Group> */}
        <Group>
            <button  onClick={handleSaveClicked}>Save</button>
            <button  onClick={handleCancelClicked}>Cancel</button>
        </Group>
    </>
}