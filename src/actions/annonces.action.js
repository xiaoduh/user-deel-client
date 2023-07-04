import axios from "axios";

export const GET_ANNONCES = "GET_ANNONCES";
export const POST_ANNONCE = "POST_ANNONCE";

export const getAnnonces = (num) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/api/annonce`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_ANNONCES, payload: array });
      })
      .catch((err) => console.log(err));
  };
};

export const postAnnonce = (
  posterID,
  type,
  title,
  detail,
  result,
  budgetMax
) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `http://localhost:5000/api/annonce`,
      data: {
        posterID,
        type,
        title,
        detail,
        result,
        budgetMax,
      },
    })
      .then((res) => {
        dispatch({
          type: POST_ANNONCE,
          payload: {
            posterID,
            type,
            title,
            detail,
            result,
            budgetMax,
          },
        });
      })
      .catch((err) => console.log(err));
  };
};
