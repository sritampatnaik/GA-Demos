import './App.css';
// import Counter from './components/Counter';
// import History from "./components/History";
import Timer from './components/Timer'
import {useState} from "react";

function App() {

  // I moved activity state from counter.js to app.js
  // const defaultActivityLog = [];
  // const [activities, setActivities] = useState(defaultActivityLog); 

  // const addActivity = (data) => {
  //   console.log("addActivity is being called",data);
  //   setActivities([...activities, data]); // Increase || Decrease
  // }

  return (
    <div className="App">
      {/* <Counter initialCount={0} addActivity={addActivity}/>
      <History activities={activities}/> */}
      <Timer/>
    </div>
  );
}

export default App;
