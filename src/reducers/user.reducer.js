import {
  GET_USER,
  BUY_LEAD,
  VERIFY_NUMBER,
  WITHDRAW_CREDIT,
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case BUY_LEAD:
      return action.payload;

    case WITHDRAW_CREDIT:
      return [action.payload, ...state];

    case VERIFY_NUMBER:
      return {
        ...state,
        twoFA: true,
      };

    default:
      return state;
  }
}
