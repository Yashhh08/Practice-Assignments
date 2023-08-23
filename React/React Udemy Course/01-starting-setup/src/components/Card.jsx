import React from "react";

const Card = (props) => {
  return (
    <div>
      <li className="concept">
        <img src={props.data.image} alt={props.data.title} />
        <h2>{props.data.title}</h2>
        <p>{props.data.description}</p>
      </li>
    </div>
  );
};

export default Card;
