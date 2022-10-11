import "./Counter.css"
import { useState } from "react"

function Counter(props) {

    // Default States
    const defaultCounterState = {
        count:0,
        resetCount:0,
        color:null
    }
    const defaultActivityLog = [];

    // Initialize States
    const [counterObj, setCounterObj] = useState(defaultCounterState);
    const [activities, setActivities] = useState(defaultActivityLog); 


    // Functions
    const handleIncrease = () => {

        // Using destructuring and spread syntax to merge 2 array
        // 1st array: the copy of "activities"
        // 2nd array: an array with one element "Increase"
        setActivities([...activities, "Increase"])

        // 1st array: activities ["Increase", "Decrease"]
        // 2nd array: ["Increase"]
        // resulting array: ["Increase", "Decrease", "Increase"]

        /*
            - shorthand for if-else using ? and :
            - if count is 3, call handleReset()
            - otherwise, set a new counter obj using mixture of 
                destructuring syntax and spread operator
        */
        counterObj.count === 3 ? handleReset() :  setCounterObj({
            ...counterObj,
            color: 'lightgreen',
            count: counterObj.count + 1
        })
        
    }

    const handleDecrease = () => {
        let newActivities = [...activities]; // Copy current to new array
        newActivities.push("Decrease"); // Add new element to new array
        setActivities(newActivities); // Assign new array to state

        let newCounterObj = {...counterObj};
        newCounterObj.count--;
        newCounterObj.color="pink";
        if(newCounterObj.count < -3){
            // if count is lesser than -3, call the handleReset()
            handleReset();
        }else{
            // else, proceed as usual        
            setCounterObj(newCounterObj);
        }
    }


    const handleReset = () => {

        // let newCounterObj = {...counterObj}; // clone the counter obj
        // newCounterObj.resetCount++; // increment counter resetCount value
        // newCounterObj.count = 0; // reset count to 0
        // newCounterObj.color = null; // reset color to null
        // setCounterObj(newCounterObj); // assign the new object to the state

        setCounterObj({
            ...counterObj,            
            resetCount:counterObj.resetCount + 1,
            count: 0,
            color: null            
        })
    }


    // Display
    return (
        <div>
            <span style={{background:counterObj.color}}>Current Count: {counterObj.count}</span>
            <div>Reset Count: {counterObj.resetCount}</div>
            <section>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease} >-</button>
                <button onClick={handleReset}>Reset</button> 
            </section>

            <section>
                <ul>
                    {activities.map(el => <li>{el}</li>)}
                </ul>
            </section>
        </div>
    )
}

export default Counter;