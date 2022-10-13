import "./Counter.css"
import { useState } from "react"

function Counter(props) {

    const {addActivity} = props;

    // Default States
    const defaultCounterState = {
        count:0,
        resetCount:0,
        color:null
    }

    // Initialize States
    const [counterObj, setCounterObj] = useState(defaultCounterState);

    // Functions
    const handleIncrease = () => {        
        addActivity("Increase");
        counterObj.count === 3 ? handleReset() :  setCounterObj({
            ...counterObj,
            color: 'lightgreen',
            count: counterObj.count + 1
        })
        
    }

    const handleDecrease = () => {
        addActivity("Decrease");
        counterObj.count === -3 ? handleReset() :  setCounterObj({
            ...counterObj,
            color: 'pink',
            count: counterObj.count - 1
        })
    }

    const handleReset = () => {
        setCounterObj({
            ...counterObj,            
            resetCount:counterObj.resetCount + 1,
            count: 0,
            color: null            
        })
    }

    return (
        <div>
            <span style={{background:counterObj.color}}>Current Count: {counterObj.count}</span>
            <div>Reset Count: {counterObj.resetCount}</div>
            <section>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
                <button onClick={handleReset}>Reset</button> 
            </section>

            
        </div>
    )
}

export default Counter;