import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import annoncesReducer from "./annonces.reducer";
import roomsReducer from "./rooms.reducer";
import offersReducer from "./offers.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  annoncesReducer,
  roomsReducer,
  offersReducer,
});
