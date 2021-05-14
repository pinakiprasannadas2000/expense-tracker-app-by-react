import React, { useContext } from "react";
import { GlobalState } from "../../../context/global-state";

const EachTransaction = (props) => {
  const { deleteTransaction } = useContext(GlobalState);

  const sign = props.transaction.amount < 0 ? "-" : "+";

  return (
    <li className={props.transaction.amount < 0 ? "minus" : "plus"}>
      {props.transaction.text}{" "}
      <span>
        {sign}Rs. {Math.abs(props.transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => {
          deleteTransaction(props.transaction.id);
        }}
      >
        x
      </button>
    </li>
  );
};

export default EachTransaction;
