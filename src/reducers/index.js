import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import leadsReducer from "./leads.reducer";
import usersReducer from "./users.reducer";
import convsReducer from "./convs.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  leadsReducer,
  convsReducer,
});
