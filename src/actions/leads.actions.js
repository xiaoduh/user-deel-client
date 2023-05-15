import axios from "axios";

export const GET_LEADS = "GET_LEADS";
export const SELL_LEAD = "SELL_LEAD";
export const UPDATE_LEAD = "UPDATE_LEAD";
export const REMOVE_LEAD = "REMOVE_LEAD";

// dispatch : ce qui est envoyé au reducer

export const getLeads = () => {
  return (dispatch) => {
    return axios
      .get(`https://deeel-v0-test.onrender.com/api/lead`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_LEADS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const removeLead = (id) => {
  return (dispatch) => {
    return axios
      .delete(`https://deeel-v0-test.onrender.com/api/lead/${id}`)
      .then((res) => {
        dispatch({
          type: REMOVE_LEAD,
          payload: { id },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const editLead = (
  id,
  lookingFor,
  company,
  sector,
  region,
  skills,
  first_name,
  last_name,
  role,
  email,
  phone,
  isOpen,
  isVerified,
  status
) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `https://deeel-v0-test.onrender.com/api/lead/${id}`,
      data: {
        id,
        lookingFor,
        company,
        sector,
        region,
        skills,
        first_name,
        last_name,
        role,
        email,
        phone,
        isOpen,
        isVerified,
        status,
      },
    })
      .then((res) => {
        dispatch({
          type: UPDATE_LEAD,
          payload: {
            id,
            lookingFor,
            company,
            sector,
            region,
            skills,
            first_name,
            last_name,
            role,
            email,
            phone,
            isOpen,
            isVerified,
            status,
          },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const sellLead = (
  dealerId,
  provider,
  profil,
  company,
  region,
  skill,
  firstName,
  lastName,
  email,
  role,
  phone
) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `https://deeel-v0-test.onrender.com/api/lead`,
      data: {
        dealerID: dealerId,
        first_name: firstName,
        last_name: lastName,
        email: email,
        role: role,
        company: company,
        region: region,
        lookingFor: profil,
        skills: skill,
        provider: provider,
        phone: phone,
        status: "pending",
      },
    })
      .then((res) => {
        dispatch({
          type: SELL_LEAD,
          payload: {
            dealerId,
            firstName,
            lastName,
            email,
            role,
            company,
            region,
            skill,
            profil,
            provider,
            phone,
          },
        });
      })
      .catch((err) => console.log(err));
  };
};
