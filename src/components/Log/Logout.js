import React, { useContext } from "react";
import { UidContext } from "../AppContext";
import axios from "axios";
import cookie from "js-cookie";

const Logout = ({ uidLogout }) => {
  const uid = useContext(UidContext);

  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `https://deeel-v0-test.onrender.com/api/user/logout/${uid}`,
      withCredentials: true,
    })
      .then(() => {
        removeCookie("jwt");
        uidLogout(null);
      })
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <img onClick={logout} className="img-icon" src="./exit.svg" alt="logout" />
  );
};

export default Logout;
