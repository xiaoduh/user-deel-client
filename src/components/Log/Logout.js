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
      url: `http://localhost:5000/api/user/logout/${uid}`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };
  return (
    <div className="deconnexion" onClick={logout}>
      <p>Déconnexion</p>
      <img className="img-icon" src="./sortir.svg" alt="logout" />
    </div>
  );
};

export default Logout;
