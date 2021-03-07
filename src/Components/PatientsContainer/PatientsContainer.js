import React, { useEffect, useState } from 'react';
import PatientInformation from '../PatientInformation/PatientInformation';
import './PatientsContainer.css'
const PatientsContainer = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3010/allPatients')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPatients(data);
        })
    }, [])

    return (
        <div className="container">
            <h4 className="text-center">All Patients in the hospital</h4>
            <div className="grid-container">
                {patients.map(patient => <PatientInformation key={patient.patient_id} patient={patient}></PatientInformation>)}
            </div>
        </div>
    );
};

export default PatientsContainer;