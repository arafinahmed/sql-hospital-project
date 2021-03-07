import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
const Admit = () => {
    const [successful, setSuccessful] = useState(false);
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        insertData(data);
    }
    const insertData = (data) => {
        setSuccessful(false);
        fetch('https://arafin-project.herokuapp.com/addNewPatient', {
            method:'POST',
            body:JSON.stringify(data),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log('post success');
            console.log(data);
            setSuccessful(true);
        })
    }
    return (
        <div className="container">
            <h3>Patient Information</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Patient Name  </label>
                <input className="form-control" ref={register} placeholder="Patient Name" name="name" required/>
                <br/>
                
                <label>Age  </label>
                <input type="number" className="form-control" ref={register} placeholder="Age" name="age" required/>
                <br/>
                
                <label>Cause of Admission : </label>
                <input className="form-control" ref={register} placeholder="Cause of Admission" name="cause" required/>
                <br/>

                <label>Assigned Doctor  </label>
                <input className="form-control" ref={register} placeholder="Assigned Doctor" name="doctor" required/>
                <br/>
                
                <label>Room  </label>
                <input type="number" className="form-control" ref={register} placeholder="Room number" name="room" required/>
                <br/>

                <button className="btn btn-outline-success">Submit</button>
                
                {
                    successful && <p>Added to the database</p>
                }

            </form>
            
        </div>
    );
};

export default Admit;