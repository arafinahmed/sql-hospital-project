import React from 'react';
import './PatientInformation.css'
const PatientInformation = (props) => {
    const {name, age, cause, doctor, patient_id, room, timestamp} = props.patient;
    return (
        <div className="patient-container">
            <p>ID: {patient_id}</p>
            <h5>Name: <strong>{name}</strong></h5>
            <p>Age: {age}</p>
            <p>Cause: {cause}</p>
            <p>Room: {room}</p>
            <p>{timestamp}</p>
            <h5>Doctor: {doctor}</h5>
        </div>
    );
};

export default PatientInformation;