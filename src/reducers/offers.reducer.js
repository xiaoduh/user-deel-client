import {
  GET_OFFERS,
  CREATE_OFFER,
  ACCEPT_OFFER,
} from "../actions/offers.actions";

const initialState = {};

export default function offersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OFFERS:
      return action.payload;

    case CREATE_OFFER:
      return [action.payload, ...state];

    case ACCEPT_OFFER:
      return action.payload;

    default:
      return state;
  }
}
