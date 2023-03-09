import { GET_LEADS } from "../actions/leads.actions";

const initialState = {};

export default function leadsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return action.payload;

    default:
      return state;
  }
}
