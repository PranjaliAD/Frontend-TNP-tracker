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
            {/* <h3>Birthday:</h3> {months.getShortName(stored.month)} {stored.day} */}
            <h3>department :</h3> {stored.department}
        </Group>
        <Group>
            <button
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}