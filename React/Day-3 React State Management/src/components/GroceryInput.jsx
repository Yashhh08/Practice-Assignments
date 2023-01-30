import React from "react";
import { useState } from "react";
import GroceryList from "./GroceryList";

const GroceryInput = (props) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter here"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          console.log(text);
          setText("");
          props.getInput(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default GroceryInput;
