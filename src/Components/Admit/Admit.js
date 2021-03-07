import React from 'react';
import {useForm} from 'react-hook-form'
const Admit = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="container">
            <h3>Patient Information</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Patient Name  </label>
                <input className="form-control" ref={register} placeholder="Patient Name" name="patientName" required/>
                <br/>
                
                <label>Age  </label>
                <input type="number" className="form-control" ref={register} placeholder="Age" name="age" required/>
                <br/>
                
                <label>Cause of Admission : </label>
                <input className="form-control" ref={register} placeholder="Cause of Admission" name="reasonOfAdmission" required/>
                <br/>

                <label>Assigned Doctor  </label>
                <input className="form-control" ref={register} placeholder="Assigned Doctor" name="doctor" required/>
                <br/>
                
                <label>Room  </label>
                <input type="number" className="form-control" ref={register} placeholder="Room number" name="roomNumber" required/>
                <br/>

                <button className="btn btn-outline-success">Submit</button>

            </form>
            
        </div>
    );
};

export default Admit;