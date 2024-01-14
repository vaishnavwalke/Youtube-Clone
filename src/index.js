import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_base.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./firebase";
import { BrowserRouter as Router } from "react-router-dom";
const root = document.getElementById("root") || document.createElement("div");
//require("../env").config();

const rootContainer = ReactDOM.createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
