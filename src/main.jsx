import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
