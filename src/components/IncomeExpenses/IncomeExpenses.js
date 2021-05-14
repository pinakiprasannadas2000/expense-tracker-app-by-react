import React, { useContext } from "react";
import { GlobalState } from "../../context/global-state";

const IncomeExpenses = (props) => {
  const transaction_ctx = useContext(GlobalState);
  const transactionsList = transaction_ctx.transactions;

  const amounts = transactionsList.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Total Income</h4>
        <p className="money plus">+Rs. {income}</p>
      </div>
      <div>
        <h4>Total Expense</h4>
        <p className="money minus">-Rs. {expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
