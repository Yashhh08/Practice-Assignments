import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/Cart-Context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (qty) => {
    cartContext.addItem({
      ...props.meal,
      qty: qty,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>${props.meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
