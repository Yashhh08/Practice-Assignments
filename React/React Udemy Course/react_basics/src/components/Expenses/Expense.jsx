import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./../Chart/ExpensesChart";

const Expense = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const changeFilterHandler = (FilteredYear) => {
    setSelectedYear(FilteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        year={selectedYear}
        onChangeFilter={changeFilterHandler}
      />

      <ExpensesChart expenses={filteredExpenses} />

      {filteredExpenses.length === 0 && (
        <p className="noExpenses">No Expenses Found.</p>
      )}

      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default Expense;
