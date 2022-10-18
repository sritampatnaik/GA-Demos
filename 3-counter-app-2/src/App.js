import './App.css';
// import Counter from './components/Counter';
// import History from "./components/History";
// import {useState} from "react";
// import Timer from './components/Timer';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';

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
        <ControlledForm />
        <hr/>
        <UncontrolledForm />
    </div>
  );
}

export default App;
