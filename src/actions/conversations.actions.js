import axios from "axios";

export const GET_CONVS = "GET_CONVS";

// dispatch : ce qui est envoyé au reducer

export const getConvs = () => {
  return (dispatch) => {
    return axios
      .get(`https://deeel-v0-test.onrender.com/api/conversation`)
      .then((res) => {
        dispatch({ type: GET_CONVS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
