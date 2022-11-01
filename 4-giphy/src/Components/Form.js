import React, { useState } from 'react';

export default function Form(props) {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent refresh
        const val = value;
        console.log('Loggin in Child', val);
        props.onChildSubmit(val) // 2. FN_PROPS
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            placeholder="type of giphy" />
            <button>Submit</button>
        </form>
    );
}
