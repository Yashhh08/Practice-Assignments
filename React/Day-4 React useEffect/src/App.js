import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import SetTime from "./components/SetTime";
import { useState } from "react";

function App() {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const getTime = (start, end) => {
    setStartTime(start);
    setEndTime(end);
  };

  return (
    <div className="App">
      <h1>Timer</h1>

      <SetTime getTime={getTime} />

      {console.log(startTime,endTime)}

      <Timer start={startTime} end={endTime} />
    </div>
  );
}

export default App;
