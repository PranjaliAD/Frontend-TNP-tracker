import { useState } from 'react';
import Group from './Group1';
import { months } from '../StudentProfile/tools';

export default function EditableUserProfile1({
    stored,
    startEditCallback
}) {

    console.log()


    return <div>
        <Group>
            <h3>First Name:</h3> {stored.fname}
            <h3>Last Name:</h3> {stored.lname}
        </Group>
        <Group>
            <h3>Linkdin:</h3> {stored.linkdin}
            <h3>GitHub:</h3> {stored.github}
        </Group>
        <Group>
            <h3>Graduation:</h3> {stored.graduation}
            <h3>Phone Number:</h3> {stored.phoneno}
        </Group>
        <Group>
            <h3>Birthday:</h3> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <button
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}