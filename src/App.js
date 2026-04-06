import { Component } from "react";
import AppContext from "./context/AppContext";
import mockTransactions from "./data/mockData";
import RoleSwitcher from "./components/RoleSwitcher";
import AddTransaction from "./components/AddTransaction";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import Transactions from "./components/Transactions";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    const savedTransactions = localStorage.getItem("finance_transactions");
    const savedDarkMode = localStorage.getItem("finance_darkMode");

    this.state = {
      transactions: savedTransactions ? JSON.parse(savedTransactions) : mockTransactions,
      role: "admin", 
      filter: "",
      darkMode: savedDarkMode === "true" 
    };
  }

  setTransactions = (transactions) => {
    this.setState({ transactions }, () => {
      localStorage.setItem("finance_transactions", JSON.stringify(transactions));
    });
  };

  setDarkMode = (darkMode) => {
    this.setState({ darkMode }, () => {
      localStorage.setItem("finance_darkMode", darkMode);
    });
  };

  setRole = (role) => {
    this.setState({ role });
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { transactions, role, filter, darkMode } = this.state;

    return (
      <AppContext.Provider
        value={{
          transactions,
          setTransactions: this.setTransactions,
          role,
          setRole: this.setRole,
          filter,
          setFilter: this.setFilter,
          darkMode,
          setDarkMode: this.setDarkMode
        }}
      >
        <div className={darkMode ? "app dark" : "app"}>
          <RoleSwitcher />
          
          <div className="main-container">
            <AddTransaction />
            
            <Dashboard />
            <Insights />
            <Transactions />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;