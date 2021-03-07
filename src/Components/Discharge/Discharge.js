import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Discharge = () => {
    const {register, handleSubmit} = useForm();
    const [condition, setCondition] = useState(false);
    const onSubmit = data => {
        removeData(data);
    }
    const removeData = data => {
        setCondition(false);
        fetch('https://arafin-project.herokuapp.com/discharge', {
            method:'POST',
            body:JSON.stringify(data),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCondition(true);
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
                {
                    condition && <p>Removed from database</p>
                }

            </form>
            
        </div>

    );
};

export default Discharge;