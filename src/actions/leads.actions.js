import axios from "axios";

export const GET_LEADS = "GET_LEADS";

// dispatch : ce qui est envoyé au reducer

export const getLeads = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/lead`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_LEADS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
