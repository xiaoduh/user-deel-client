import { GET_ANNONCES, POST_ANNONCE } from "../actions/annonces.action";

const initialState = {};

export default function annoncesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANNONCES:
      return action.payload;

    case POST_ANNONCE:
      return [action.payload, ...state];

    default:
      return state;
  }
}
