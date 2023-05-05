import { GET_ALL_USER } from "../actions/users.actions";

const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USER:
      return action.payload;

    default:
      return state;
  }
}
