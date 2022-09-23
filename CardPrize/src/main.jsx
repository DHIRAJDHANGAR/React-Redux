import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import CardContainer from "./ProductCard";
import "./index.css";
import store from "./Redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CardContainer />
    </Provider>
  </React.StrictMode>
);
