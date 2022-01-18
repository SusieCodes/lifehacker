import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { LifeHacker } from "./components/LifeHacker";
import "./components/LifeHacker.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LifeHacker />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
