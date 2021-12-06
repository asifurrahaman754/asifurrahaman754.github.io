import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BackContext from "./context/BackContext";

ReactDOM.render(
  <React.StrictMode>
    <BackContext>
      <App />
    </BackContext>
  </React.StrictMode>,
  document.getElementById("root")
);
