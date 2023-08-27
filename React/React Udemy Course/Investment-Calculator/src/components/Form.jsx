import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const InitalInputState = {
    "current-savings": 10000,
    "yearly-contribution": 1000,
    "expected-return": 13,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(InitalInputState);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(InitalInputState);
    props.onReset();
  };

  const inputChanngeHandler = (input, value) => {
    setUserInput((prev) => {
      return { ...prev, [input]: value };
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => {
              inputChanngeHandler("current-savings", event.target.value);
            }}
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => {
              inputChanngeHandler("yearly-contribution", event.target.value);
            }}
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) => {
              inputChanngeHandler("expected-return", event.target.value);
            }}
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => {
              inputChanngeHandler("duration", event.target.value);
            }}
            value={userInput.duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
