import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@src/Members/MDK/css/GlobalStyle.css";
import { GridProvider } from "./context/view_context.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GridProvider>
      <App />
      <ToastContainer />
    </GridProvider>
  </React.StrictMode>
);
