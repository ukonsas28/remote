import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RemoteApp } from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RemoteApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
