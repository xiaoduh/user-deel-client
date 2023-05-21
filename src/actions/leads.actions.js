import axios from "axios";

export const GET_LEADS = "GET_LEADS";
export const SELL_LEAD = "SELL_LEAD";
export const UPDATE_LEAD = "UPDATE_LEAD";
export const REMOVE_LEAD = "REMOVE_LEAD";

// dispatch : ce qui est envoyé au reducer

export const getLeads = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/api/lead`)
      .then((res) => {
        dispatch({ type: GET_LEADS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const removeLead = (id) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:5000/api/lead/${id}`)
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
  status,
  price
) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:5000/api/lead/${id}`,
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
        price,
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
            price,
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
  fdp,
  firstName,
  lastName,
  email,
  role,
  phone,
  price
) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `http://localhost:5000/api/lead`,
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
        desc: fdp,
        provider: provider,
        phone: phone,
        status: "pending",
        price: price,
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
            fdp,
            profil,
            provider,
            phone,
            price,
          },
        });
      })
      .catch((err) => console.log(err));
  };
};
