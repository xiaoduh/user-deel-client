import { GET_CONVS } from "../actions/conversations.actions";

const initialState = {};

export default function convsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONVS:
      return action.payload;

    default:
      return state;
  }
}
