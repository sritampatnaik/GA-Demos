import {useRef, useState} from "react";

const UncontrolledForm = () => {

    const inputRef = useRef(); // This ref will reference the <input>
    const [formInput, setFormInput] = useState("");

    // This function is called when submit button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormInput(inputRef.current.value);
    }

    return (
        <>
            <h3>Uncontrolled Form</h3>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} placeholder="Please input something" /> 
                <button>Submit</button>
                <div>{formInput}</div>
            </form>
        </>
    )
}

export default UncontrolledForm;