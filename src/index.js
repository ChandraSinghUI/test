import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import App from "./container/app";
import rootReducers from "../src/store/Reducers/index";
const store = createStore(rootReducers);

console.log(" connect Store", store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
