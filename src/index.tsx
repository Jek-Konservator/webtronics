import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { GlobalStyle, theme } from "./globalStyle";
import { Provider } from "react-redux";
import { store } from "./reduxToolKit";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Router>
);
