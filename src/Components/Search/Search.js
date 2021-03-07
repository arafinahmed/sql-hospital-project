import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PatientInformation from '../PatientInformation/PatientInformation';

const Search = () => {
    const [patients, setPatients] = useState([]);
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        findPatient(data);
    }
    const findPatient = (data) => {
        fetch('http://localhost:3010/search', {
            method:'POST',
            body:JSON.stringify(data),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log('post success');
            console.log("suc", data);       
            setPatients(data);
        })


    }
    return (
        <div className="container">
            <h3>Searching is everything</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Patient Name  </label>
                <input className="form-control" ref={register} placeholder="Patient Name" name="name" required/>
                <br/>
                          
                <button className="btn btn-outline-success">Submit</button>

            </form>
            <div className="container">
            <h4 className="text-center">Searched Result</h4>
            <div className="grid-container">
                {patients.map(patient => <PatientInformation key={patient.patient_id} patient={patient}></PatientInformation>)}
            </div>
        </div>
            
        </div>
    );
};

export default Search;