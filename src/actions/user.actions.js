import axios from "axios";

export const GET_USER = "GET_USER";

// dispatch : ce qui est envoyé au reducer

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
