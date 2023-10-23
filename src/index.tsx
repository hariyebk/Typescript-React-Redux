import React from "react";
import ReactDOM from "react-dom"
import App from "./components/App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./components/reducer";
import { applyMiddleware, createStore } from "redux";

const store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store} >
    <App color = "blue" />
  </Provider>,
document.getElementById("root"))