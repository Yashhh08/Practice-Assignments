import React, { useRef, useState } from "react";
import Input from "./../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [validForm, setValidForm] = useState(true);

  const qtyInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredQty = qtyInputRef.current.value;

    if (enteredQty.trim().length === 0 || +enteredQty < 1) {
      setValidForm(false);
      return;
    }

    props.onAddToCart(+enteredQty);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={qtyInputRef}
        label="Qty"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!validForm && <p>Enter valid quantity</p>}
    </form>
  );
};

export default MealItemForm;
