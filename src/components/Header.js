import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Logout from "./Log/Logout";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty } from "../utils";

const Header = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  return (
    <>
      <header>
        <NavLink to="/">
          <img src="./logo.png" alt="logo" />
        </NavLink>
        <div className="icon">
          <div className="menu-burger">
            <img
              className="img-icon"
              src="./menu-burger.svg"
              alt="menu-burger"
            />
          </div>
          <div className="credit-balance">
            {userData.coin > 0 ? (
              <>
                <span>{!isEmpty(userData) && userData.coin}</span>{" "}
                <p style={{ fontSize: "1rem" }}>💰</p>
              </>
            ) : (
              <>
                <span style={{ color: "#F7685B" }}>
                  {!isEmpty(userData) && userData.coin}
                </span>{" "}
                <p style={{ fontSize: "1rem" }}>💰</p>
              </>
            )}
          </div>{" "}
          <NavLink to="/help">
            <button className="btn-cancel">Aide</button>
          </NavLink>
          <NavLink to="/lead">
            <button className="btn-purple">Apporter un besoin</button>
          </NavLink>
          {userData.isBusinessProvider && (
            <NavLink to="/transfert">
              <button className="btn-purple">Convertir mes crédits</button>
            </NavLink>
          )}
          {userData.isSales && (
            <NavLink to="/store">
              <button>Acheter des crédits</button>
            </NavLink>
          )}
          {uid ? <Logout /> : <></>}
        </div>
      </header>
    </>
  );
};

export default Header;
