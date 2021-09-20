import React from "react";
import GlobalStyles from './GlobalStyles';
import globalStyles from './GlobalStyles';
import Header from './Header';
import AppRouter from "./Router";

const App = () => {
  return (
    <>
      <AppRouter />
      <GlobalStyles /> 
    </>
  );
};

export default App;
