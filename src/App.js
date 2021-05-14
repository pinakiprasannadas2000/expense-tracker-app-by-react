import "./App.css";

import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses";
import TransactionList from "./components/Transactions/TransactionList/TransactionList";
import AddTransaction from "./components/Transactions/AddTransaction/AddTransaction";

import { GlobalContextProvider } from "../src/context/global-state";

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
