import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app"; // Import the CSS file

// Render the root component (App) into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
