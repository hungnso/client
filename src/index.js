import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import DataProvider from "./redux/store";
// store

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);
