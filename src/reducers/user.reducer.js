import {
  GET_USER,
  COUNT_ANNONCE,
  VERIFY_NUMBER,
  WITHDRAW_CREDIT,
  COUNT_RESPONSE,
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case COUNT_ANNONCE:
      return [action.payload, ...state];

    case COUNT_RESPONSE:
      return [action.payload, ...state];

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
