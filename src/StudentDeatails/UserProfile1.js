import { useState } from 'react';
import Group from './Group1';
import { months } from '../tools';

export default function EditableUserProfile1({
    stored,
    startEditCallback
}) {

    console.log()


    return <div>
        <h1>{stored.fname} {stored.lname}</h1>
        <Group>
        <h3>PRN no:</h3> {stored.prnno}
            <h3>First Name:</h3> {stored.fname}
            <h3>Last Name:</h3> {stored.lname}
        </Group>
        <Group>
            <h3>gender:</h3> {stored.gender}
            <h3>contact number:</h3> {stored.contactnumber}
        </Group>
        <Group>
            <h3>email ID:</h3> {stored.emailID}
            <h3>password :</h3> {stored.password}
        </Group>
        <Group>
            <h3>Birthday:</h3> {months.getShortName(stored.month)} {stored.day}
            <h3>department :</h3> {stored.department}
        </Group>
        <Group>
            <h3>Mentor email ID:</h3> {stored.mentoremailID}
            <h3>About :</h3> {stored.about}
        </Group>
        <Group>
            <h3>regID:</h3> {stored.regID}
            <h3>skills :</h3> {stored.skills}
        </Group>
        <Group>
            <h3>linkedIN:</h3> {stored.linkedIN}
            <h3>github :</h3> {stored.github}
        </Group>
        <Group>
            <h3>image:</h3> {stored.image}
        </Group>
        <Group>
            <h3>bgimage :</h3> {stored.bgimage}
        </Group>
        <Group>
            <h3>resume:</h3> {stored.resume}
            <h3>internshipStatus :</h3> {stored.internshipStatus}
        </Group>
        <Group>
            <h3>cgpa:</h3> {stored.cgpa}
            <h3>placementStatus :</h3> {stored.placementStatus}
        </Group>
        <Group>
            <h3>year:</h3> {stored.year}
            <h3>Birthday:</h3> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <button
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}