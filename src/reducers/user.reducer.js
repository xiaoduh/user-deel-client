import { GET_USER, BUY_LEAD } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case BUY_LEAD:
      return action.payload;

    default:
      return state;
  }
}
