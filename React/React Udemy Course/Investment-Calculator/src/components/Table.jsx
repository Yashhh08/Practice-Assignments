import React from "react";
import classes from "./Table.module.css";

const Table = (props) => {
  //   console.log(props.data);
  console.log(props.initialInvestment);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.savingsEndOfYear)}</td>
              <td>{formatter.format(data.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  data.savingsEndOfYear -
                    props.initialInvestment -
                    data.yearlyContribution * data.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment + data.yearlyContribution * data.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
