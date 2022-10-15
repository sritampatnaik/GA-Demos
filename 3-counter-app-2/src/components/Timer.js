import { useState, useEffect } from "react"

function Timer() {
    const [counter, setCounter] = useState(0);
    const [btnToggle, setBtnToggle] = useState(false)
    let interval;

    const startTimer = () => {
        console.log("startTimer");
        if (!btnToggle) {
            interval = setInterval(() => {
                console.log("Interval Func Ran")
                setCounter(counter =>  counter + 1)
            }, 1000)
        }
    }
    const handleToggle = () => {
        setBtnToggle(prevState =>  !prevState)
    }
    // useEffect(() => { ... }) -> The function in useEffect will be called
    // on every rerender
    // useEffect(() => {
    //     console.log("USE EFFECT FUNCTION TRIGGERED ON COMPONENT RENDERS")
    //     // startTimer()
    // })

    // useEffect(() => { ... }, []) -> The function in useEffect will
    // be only called the first time the component is mounted
    // useEffect(() => {
    //     console.log("USE EFFECT FUNCTION TRIGGERED ONLY i.e FIRT TIME")
    //     startTimer()
    // }, [])

    // useEffect(() => { ... }, [dependencies]) -> The function in useEffect will
    // be called the first time the component is mounted and when 
    // any of the dependencies are updated
    useEffect((interval, startTimer) => {
        console.log("USE EFFECT FUNCTION TRIGGERED First time and when dependencies change")
        startTimer()
        let cleanUpFunction = () => {
            console.log("This is the cleanup funciton")
            clearInterval(interval)
        }
        return cleanUpFunction
    }, [ btnToggle ])


    return (
        <>
            <div>Counter: {counter}</div>
            {btnToggle ? 
                <button onClick={handleToggle}>Start Timer</button>
                :
                <button onClick={handleToggle}>Pause Timer</button>
            }
        </>
    );
}

export default Timer;