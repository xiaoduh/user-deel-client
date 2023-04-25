import { GET_LEADS, SELL_LEAD, UPDATE_LEAD } from "../actions/leads.actions";

const initialState = {};

export default function leadsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return action.payload;

    case SELL_LEAD:
      return action.payload;

    case UPDATE_LEAD:
      return action.payload;

    default:
      return state;
  }
}
