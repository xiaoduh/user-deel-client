import React, { useContext } from "react";
import { UidContext } from "../AppContext";
import { logout } from "../../actions/user.actions";

const Logout = () => {
  const uid = useContext(UidContext);

  return (
    <img
      onClick={() => logout(uid)}
      className="img-icon"
      src="./exit.svg"
      alt="logout"
    />
  );
};

export default Logout;
