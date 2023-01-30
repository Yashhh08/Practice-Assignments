import React from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Grocery = () => {
  const [data, setData] = useState([]);

  const getInput = (input) => {
    console.log(input);
    setData([...data, input]);
  };

  const deleteItem = (index) => {
    const newData = [...data];

    newData.splice(index, 1);

    setData(newData);
  };

  return (
    <div>
      <h1>Grocery</h1>
      <GroceryInput getInput={getInput} />
      <GroceryList showData={data} deleteItem={deleteItem} />
    </div>
  );
};

export default Grocery;
