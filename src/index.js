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
import { getAllUsers } from "./actions/users.actions";
import { getAnnonces } from "./actions/annonces.action";
import { getRooms } from "./actions/room.action";
import { getOffers } from "./actions/offers.actions";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (process.env.REACT_APP_NODE_ENV === "production") {
  disableReactDevTools();
}

disableReactDevTools();

store.dispatch(getAllUsers());
store.dispatch(getAnnonces());
store.dispatch(getRooms());
store.dispatch(getOffers());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
