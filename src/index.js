import React from "react";
import ReactDOM from "react-dom";
import "./style/normalize.css";
import "./style/global.css";
import "./style/style.css";
import App from "./App";
import Context from "./store/context";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
