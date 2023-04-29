import {
  GET_LEADS,
  REMOVE_LEAD,
  SELL_LEAD,
  UPDATE_LEAD,
} from "../actions/leads.actions";

const initialState = {};

export default function leadsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return action.payload;

    case SELL_LEAD:
      return [action.payload, ...state];

    case UPDATE_LEAD:
      return state.map((lead) => {
        if (lead._id === action.payload.id) {
          return {
            ...lead,
            lookingFor: action.payload.lookingFor,
            company: action.payload.company,
            sector: action.payload.sector,
            region: action.payload.region,
            skills: action.payload.skills,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            role: action.payload.role,
            email: action.payload.email,
            phone: action.payload.phone,
          };
        } else return lead;
      });

    case REMOVE_LEAD:
      return state.filter((lead) => lead._id !== action.payload.id);

    default:
      return state;
  }
}
