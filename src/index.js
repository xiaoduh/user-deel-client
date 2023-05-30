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
import { getLeads } from "./actions/leads.actions";
import { getAllUsers } from "./actions/users.actions";
import { getConvs } from "./actions/conversations.actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getLeads());
store.dispatch(getAllUsers());
store.dispatch(getConvs());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
