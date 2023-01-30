import React from "react";
import { useState } from "react";

const SetTime = (props) => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  return (
    <div>
      <div>
      <label>Start Time</label>
        <input
          type="number"
          value={startTime}
          placeholder="Start Time"
          onChange={(e) => {
            setStartTime(parseInt(e.target.value));
          }}
        />
        <button
          onClick={() => {
            console.log("startTime : ", startTime);
            props.getTime(startTime,endTime);
            // setStartTime(0);
          }}
        >
          ok
        </button>
      </div>

      <div>
        <label>End Time</label>
        <input
          type="number"
          value={endTime}
          placeholder="End Time"
          onChange={(e) => {
            setEndTime(parseInt(e.target.value));
          }}
        />
        <button
          onClick={() => {
            console.log("endTime : ", endTime);
            props.getTime(startTime,endTime);
            // setEndTime(0);
          }}
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default SetTime;
