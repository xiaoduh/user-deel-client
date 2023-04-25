import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// dev tools
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { getLeads } from "./actions/leads.actions";
import { getAllUsers } from "./actions/users.actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.dispatch(getLeads());
store.dispatch(getAllUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
