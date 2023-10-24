import React from "react";
import ReactDOM from "react-dom/client"
import App from "./components/App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { applyMiddleware, createStore } from "redux";

const store = createStore(reducers, applyMiddleware(thunk))
const root = document.getElementById("root")
if(root){
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    </React.StrictMode>
  )
}