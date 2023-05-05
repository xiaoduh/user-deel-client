import axios from "axios";

export const GET_USER = "GET_USER";
export const BUY_LEAD = "BUY_LEAD";
export const VERIFY_NUMBER = "VERIFY_NUMBER";
export const WITHDRAW_CREDIT = "WITHDRAW_CREDIT";

// dispatch : ce qui est envoyé au reducer

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`https://deeel-v0-test.onrender.com/api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const buyLead = (leadId, userId, dealerId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `https://deeel-v0-test.onrender.com/api/lead/buy-lead/` + leadId,
      data: { userID: userId, dealerID: dealerId },
    })
      .then((res) => {
        dispatch({ type: BUY_LEAD, payload: { leadId, userId, dealerId } });
      })
      .catch((err) => console.log(err));
  };
};

export const withDraw = (userId, amount) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `https://deeel-v0-test.onrender.com/api/user/withdraw/${userId}`,
      data: { withdraw: amount },
    })
      .then((res) => {
        dispatch({ type: WITHDRAW_CREDIT, payload: { withdraw: amount } });
      })
      .catch((err) => console.log(err));
  };
};

export const verifyNumber = (userId) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url:
        `https://deeel-v0-test.onrender.com/api/user/verify/number/` + userId,
    })
      .then((res) => {
        dispatch({ type: VERIFY_NUMBER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
