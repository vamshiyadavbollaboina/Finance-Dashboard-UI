import React from "react";

const AppContext = React.createContext({
  transactions: [],
  setTransactions: () => {},
  role: "admin",
  setRole: () => {},
  filter: "",
  setFilter: () => {},
  darkMode: false,
  setDarkMode: () => {}
});

export default AppContext;