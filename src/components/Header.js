import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Logout from "./Log/Logout";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  return (
    <>
      <header>
        <h2>Deel</h2>

        <div className="icon">
          <div className="credit-balance">
            <span>{userData.coin}</span> <p>Crédits</p>
          </div>{" "}
          <NavLink to="/store">
            <button>Acheter des crédits</button>
          </NavLink>
          {uid ? <Logout /> : <></>}
        </div>
      </header>
    </>
  );
};

export default Header;
