import React, {useState, useEffect} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false)
  let interval = null;

  // COMPONENTDIDMOUNT - will run once on MOUNT
  // useEffect( () => {}, [])

  // COMPONENTDIDUPDATE - will run on every render
  // useEffect( () => {})

  // COMPONENTWILLUNMOUNT - runs once
  // useEffect( () => {
  //      return () => {}
  //})

  useEffect(() => {
    let interval;
    if (!toggle) {
      interval = setInterval(() => {
        setCount((prevState) => prevState + 1)
      }, 2000);
    }
      return () => {
        console.log("Cleanup")
        clearInterval(interval)
    };
  }, [toggle]);

  const handleToggle = () => {
    setToggle(!toggle)
  };

  // useEffect( () => {
  //   startTimer()
  //   // COMPOMENTWILLUNMOUNT
  //   return () => clearInterval(interval)
  // })

  // const startTimer = () => {
  //   console.log('startTimer');
  //   // this clears out the specific interval
  //   clearInterval(interval)
  //   interval = setInterval( () => {
  //     console.log('setInterval')
  //     setCount(prevState => prevState + 1)
  //   }, 2000)
    
  // };

  // const pauseTimer = () => {
  //   clearInterval(interval)
  
  //   setToggle(!toggle)
  //   console.log('stopTimer');
  // };


  return (
    <>
      <div>Counter: {count}</div>
      {toggle ? 
        <button onClick={handleToggle}>Start Timer</button>
        :
        <button onClick={handleToggle}>Pause Timer</button>
      }
    </>
  );
};

export default Counter