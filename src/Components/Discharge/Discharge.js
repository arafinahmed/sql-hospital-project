import React from 'react';
import { useForm } from 'react-hook-form';

const Discharge = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        removeData(data);
    }
    const removeData = data => {
        fetch('http://localhost:3010/discharge', {
            method:'POST',
            body:JSON.stringify(data),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }
    return (
        <div className="container">
            <h3>Collect the bill before discharge</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Patient ID  </label>
                <input className="form-control" ref={register} placeholder="Patient ID" name="id" required/>
                <br/>
                          
                <button className="btn btn-outline-success">Submit</button>
                
                

            </form>
            
        </div>

    );
};

export default Discharge;