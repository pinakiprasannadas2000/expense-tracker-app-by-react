import { Fragment, useContext } from "react";
import { GlobalState } from "../../context/global-state";

const Balance = (props) => {
  const transaction_ctx = useContext(GlobalState);
  const transactionsList = transaction_ctx.transactions;

  const amounts = transactionsList.map((transaction) => {
    return transaction.amount;
  });
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Fragment>
      <h4>My Total Balance</h4>
      <h1>Rs. {total}</h1>
    </Fragment>
  );
};

export default Balance;
