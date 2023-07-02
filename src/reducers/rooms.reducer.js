import { CREATE_ROOM, GET_ROOMS } from "../actions/room.action";

const initialState = {};

export default function roomsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROOMS:
      return action.payload;

    case CREATE_ROOM:
      return [action.payload, ...state];

    default:
      return state;
  }
}
