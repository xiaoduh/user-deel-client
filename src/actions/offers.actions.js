import axios from "axios";

export const GET_OFFERS = "GET_OFFERS";
export const CREATE_OFFER = "CREATE_OFFER";
export const ACCEPT_OFFER = "ACCEPT_OFFER";

export const getOffers = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/api/offer`)
      .then((res) => {
        dispatch({ type: GET_OFFERS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const createOffer = (uniqueID, annonceID, posterID, userID, price) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `http://localhost:5000/api/offer`,
      data: {
        uniqueRoomID: uniqueID,
        annonceID: annonceID,
        posterID: posterID,
        userID: userID,
        price: price,
      },
    })
      .then((res) => {
        dispatch({ type: CREATE_OFFER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const acceptOffer = (uniqueID, uid, price) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:5000/api/offer/${uniqueID}`,
      data: {
        crediteur: uid,
        credit: price,
      },
    })
      .then((res) => {
        dispatch({ type: ACCEPT_OFFER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
