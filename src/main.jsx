import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot desde react-dom/client
import App from "./App.jsx";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

// Utiliza createRoot desde react-dom/client
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
