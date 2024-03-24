import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./i18n/index";

const rootElement = document.getElementById("app");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App />);
