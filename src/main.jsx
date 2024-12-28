import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // App styling
import "./animation.css"; // Animations

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
