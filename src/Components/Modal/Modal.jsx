import React, { useState } from "react";
import './Modal.css';
// import { RxCross1 } from "react-icons/rx";
// import { Rx } from 'react-icons/ri';

import {useEffect} from 'react'; 

// import { cleanup } from '@testing-library/react';
const MyModal = ({ closeModal }) => {
    useEffect(()=> {
        document.body.style.overflowY = "hidden";
        return() => {
            document.body.style.overflowY = "scroll";
        };
    },[]);
    return (
            <div className="modal-container">
                {/* <RxCross1 /> */}
                <div className="top"><h2>Stay tuned</h2><span className="cross-icon" onClick={closeModal}>X</span></div>
                <ul>
                    <li>Pict announces "TechFiesta - An International Hackathon" </li>
                    <li>Pict announces "TechFiesta - An International Hackathon" </li>
                    <li>Pict announces "TechFiesta - An International Hackathon" </li>
                </ul>
                </div>
    );
};

const Modal = () => {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => setShowModal(false);

    return (
        <div>
            {/* <button className="modal-btn" onClick={() => setShowModal(true)}>Open Modal</button> */}
            {showModal && <MyModal closeModal={closeModal} />}
        </div>
    );
};

export default Modal;
