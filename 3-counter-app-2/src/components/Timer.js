import { useState, useEffect } from "react"

function Timer() {
    const [counter, setCounter] = useState(0);
    let interval = null;

    const startTimer = () => {
        console.log("startTimer");
        interval = setInterval(() => {
            console.log("setInterval");
            setCounter((prevState) => prevState + 1);
        }, 1000);
    };

    const pauseTimer = () => {
        console.log("stopTimer");
        clearInterval(interval);
    };
    
    useEffect(() => {
        console.log("useEffect");
        startTimer();
        return () => {
            console.log("Clear")
            clearInterval(interval)
        };
    }, []);
    
    return (
        <>
        <div>Counter: {counter}</div>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={pauseTimer}>Pause Timer</button>
        </>
    );
}

export default Timer;