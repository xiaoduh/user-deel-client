import axios from "axios";

export const GET_ALL_USER = "GET_ALL_USER";

export const getAllUsers = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/api/user`)
      .then((res) => {
        dispatch({ type: GET_ALL_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateUser = () => {
  
}
