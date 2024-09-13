import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Modal from "react-modal";

// This is important for accessibility
Modal.setAppElement("#root");

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
