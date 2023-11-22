import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style.css";
import App from "./App";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
