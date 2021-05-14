import { Fragment, useContext } from "react";
import { GlobalState } from "../../../context/global-state";
import EachTransaction from "../EachTransaction/EachTransaction";

const TransactionList = (props) => {
  const transaction_ctx = useContext(GlobalState);

  const transactionsList = transaction_ctx.transactions;

  return (
    <Fragment>
      <h3>All Transactions</h3>
      <ul className="list">
        {transactionsList.map((transaction) => {
          return (
            <EachTransaction key={transaction.id} transaction={transaction} />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default TransactionList;
