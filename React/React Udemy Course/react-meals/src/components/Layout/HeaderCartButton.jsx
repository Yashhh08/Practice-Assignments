import React, { useContext } from "react";
import CartIcon from "./../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "./../../store/Cart-Context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((currValue, item) => {
    return currValue + item.qty;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
