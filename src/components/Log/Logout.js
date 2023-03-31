import React, { useContext } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { UidContext } from "../AppContext";

const Logout = () => {
  const uid = useContext(UidContext);
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout/${uid}`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };
  return (
    <img onClick={logout} className="img-icon" src="./exit.svg" alt="logout" />
  );
};

export default Logout;
