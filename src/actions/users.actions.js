import axios from "axios";

export const GET_ALL_USER = "GET_ALL_USER";

export const getAllUsers = () => {
  return (dispatch) => {
    return axios
      .get(`https://deeel-v0-test.onrender.com/api/user`)
      .then((res) => {
        dispatch({ type: GET_ALL_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateUser = () => {};
