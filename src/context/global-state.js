import { createContext, useReducer } from "react";

// initial state
const initialState = {
  transactions: [],
  deleteTransaction: () => {},
  addTransaction: () => {},
};

// create context
export const GlobalState = createContext(initialState);

// reducer function
const transactionReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          return transaction.id !== action.payload;
        }),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

// provider
export const GlobalContextProvider = (props) => {
  const [transactionState, dispatchTransaction] = useReducer(
    transactionReducer,
    initialState
  );

  // actions
  const deleteTransactionHandler = (id) => {
    dispatchTransaction({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransactionHandler = (transaction) => {
    dispatchTransaction({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalState.Provider
      value={{
        transactions: transactionState.transactions,
        deleteTransaction: deleteTransactionHandler,
        addTransaction: addTransactionHandler,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};
