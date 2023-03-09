import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import leadsReducer from "./leads.reducer";

export default combineReducers({
  userReducer,
  leadsReducer,
});
