import React from "react";
import ReactDOM from "react-dom";
import "./style/normalize.css";
import "./style/global.css";
import "./style/style.css";
import App from "./App";
import Context from "./store/context";
import UserData from "./store/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserData>
      <Context>
        <App />
      </Context>
    </UserData>
  </React.StrictMode>,
  document.getElementById("root")
);
