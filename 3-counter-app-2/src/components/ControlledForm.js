import React, { useState } from 'react';

function ControlledForm () {
    const [formInput, setFormInput] = useState("");

    // This function is called at each input
    const handleInput = (event) => {        
        setFormInput(event.target.value)
    }

    // This function is called when submit button is clicked
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('On Submission State:', formInput)
    };

    return (
        <>
            <h3>Controlled Form</h3>
            <form onSubmit={handleSubmit}>
                <input
                    value={formInput}
                    onChange={handleInput}
                    placeholder="Please input something" />
                <button>Submit</button>
                <div>{formInput}</div>
            </form>
        </>
        
    );
}

export default ControlledForm;
