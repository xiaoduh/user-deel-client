import {
  GET_USER,
  BUY_LEAD,
  VERIFY_NUMBER,
  LOGOUT,
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case BUY_LEAD:
      return action.payload;

    case VERIFY_NUMBER:
      return {
        ...state,
        twoFA: true,
      };

    case LOGOUT:
      return action.payload;

    default:
      return state;
  }
}
