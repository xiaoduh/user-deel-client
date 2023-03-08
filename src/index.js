import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import thunk from "redux-thunk";
// dev tools
// import { composeWithDevTools } from "redux-devtools-extension";
import CounterReducer from "./reducers/CounterReducer";

const store = createStore(CounterReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
