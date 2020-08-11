import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Components/DataContext.jsx";

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
