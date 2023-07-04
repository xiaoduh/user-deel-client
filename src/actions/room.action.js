import axios from "axios";

export const CREATE_ROOM = "CREATE_ROOM";
export const GET_ROOMS = "GET_ROOMS";

// dispatch : ce qui est envoyé au reducer

export const createRoom = (annonceID, posterID, userID, uniqueID) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `http://localhost:5000/api/room`,
      data: {
        annonceID,
        posterID,
        userID,
        uniqueID,
      },
    })
      .then((res) => {
        if (res.data.duplicate !== true) {
          dispatch({
            type: CREATE_ROOM,
            payload: {
              annonceID,
              posterID,
              userID,
              uniqueID,
            },
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const getRooms = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/api/room`)
      .then((res) => {
        dispatch({ type: GET_ROOMS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// export const getMsgFromConv = (id) => {
//   return (dispatch) => {
//     return axios
//       .get(`http://localhost:5000/api/message/${id}`)
//       .then((res) => {
//         dispatch({ type: GET_MESSAGES, payload: res.data });
//       })
//       .catch((err) => console.log(err));
//   };
// };
