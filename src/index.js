import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";

// context hook
import TestProvider from "./components/context/TestProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProSidebarProvider>
      <TestProvider>
        <App />
      </TestProvider>
    </ProSidebarProvider>
  </BrowserRouter>
);
