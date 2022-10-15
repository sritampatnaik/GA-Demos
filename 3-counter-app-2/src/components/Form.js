import React, { useState } from 'react';

function Form () {
    const [formInput, setFormInput] = useState("");

    const handleInput = (event) => {
        console.log(event.target.value)
        setFormInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const val = formInput; // Getting the value from the state
        console.log('STATE: formInput:', val)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={formInput}
                onChange={handleInput}
                placeholder="Please input something" />
            <button>Submit</button>
        </form>
    );
}

export default Form;
