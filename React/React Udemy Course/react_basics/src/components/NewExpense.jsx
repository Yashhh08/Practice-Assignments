import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const SaveExpenseDataHandler = (SavedExpenseData) => {
    const expenseData = {
      ...SavedExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    setShowExpenseForm(false);
  };

  const addNewExpenseHandler = () => {
    setShowExpenseForm(true);
  };

  const onCancelHandler = (value) => {
    setShowExpenseForm(value);
  };

  return (
    <div className="new-expense">
      {showExpenseForm === false && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {showExpenseForm === true && (
        <ExpenseForm
          onCancel={onCancelHandler}
          onSaveExpenseData={SaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
