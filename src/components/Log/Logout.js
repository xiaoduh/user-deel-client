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
      url: `http://localhost:5000/api/user/logout/${uid}`,
      withCredentials: true,
    })
      .then(() => {
        removeCookie("jwt");
        uidLogout();
      })
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <div className="deconnexion" onClick={logout}>
      <p>Déconnexion</p>
      <img src="./sortir.svg" alt="exit" className="exit" />
    </div>
  );
};

export default Logout;
