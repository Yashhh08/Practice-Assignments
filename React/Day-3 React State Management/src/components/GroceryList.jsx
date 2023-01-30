import React from "react";
import { v4 as uuid } from "uuid";

const GroceryList = (props) => {
  console.log(props.showData);

  const deleteItem = (index) => {
    props.deleteItem(index);
  };

  return (
    <ul>
      {props.showData.map((item, index) => {
        return (
          <li key={uuid()}>
            {item}
            <button onClick={() => deleteItem(index)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default GroceryList;
