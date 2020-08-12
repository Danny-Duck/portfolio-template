import React from "react";

const ThemeContext = React.createContext();

console.log("context called");

const themeVariables = {
  grey: "#e5e5e5",
  white: "#fafafa",
  dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  innerShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  headerFont: "Quicksand sans-serif",
  bodyFont: "Open Sans, sans-serif",
};

const ThemeProvider = ({ children }) => {
  const { Provider } = ThemeContext;
  return <Provider value={themeVariables}>{children}</Provider>;
};
export { ThemeProvider, ThemeContext };
