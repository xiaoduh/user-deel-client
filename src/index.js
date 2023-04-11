import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
// dev tools
import rootReducer from "./reducers";
// import { getLeads } from "./actions/leads.actions";

const store = createStore(rootReducer);

// store.dispatch(getLeads());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
