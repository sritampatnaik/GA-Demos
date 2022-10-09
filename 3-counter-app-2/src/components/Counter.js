import "./Counter.css"
import { useState } from "react"

function Counter(props) {
    // let state = useState(props.initialCount)
    // let count = state[0];
    // let setCount = state[1]

    let [count, setCount] = useState(props.initialCount)

    const handleIncrease = () => {
        console.log("Increase")
        setCount(count + 1)
    }
    const handleDecrease = () => {
        console.log("Decrease")
        setCount(count - 1)
        

    }
    return (
        <div>
            <span>Current Count: {count}</span>
            <section>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease} >-</button>
            </section>
        </div>
    )
}

export default Counter;