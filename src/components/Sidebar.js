import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const userData = useSelector((state) => state.userReducer);
  const leadsData = useSelector((state) => state.leadsReducer);
  console.log(userData.lead_bought.length);

  return (
    <nav>
      <div className="sidebar-header">
        <NavLink to="/">
          <img src="./logo.png" alt="logo" />
        </NavLink>
      </div>
      <div className="upper-container">
        <div className="profil-info">
          {/* <img className="img-profil" src="/profil.png" alt="alt-profil-user" /> */}
          <div className="user-info-container">
            <h3>
              {userData?.first_name} {userData?.last_name}
            </h3>
            <small>{userData.email}</small>
          </div>
        </div>
        <div className="navlinks">
          <div className="navlinks-container">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-left-nav" : "")}
            >
              <img
                className="img-icon"
                src="./marketplace.svg"
                alt="marketplace"
              />
              <p>Marketplace ({leadsData?.length})</p>
            </NavLink>
            <NavLink
              to="/lead"
              className={({ isActive }) => (isActive ? "active-left-nav" : "")}
            >
              <img className="img-icon" src="./lead.svg" alt="contact" />
              <p>Mes contacts ({userData?.lead_bought.length})</p>
            </NavLink>
            <NavLink
              to="/store"
              className={({ isActive }) => (isActive ? "active-left-nav" : "")}
            >
              <img className="img-icon" src="./store.svg" alt="store" />
              <p>Crédits</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="lower-container">
        <div className="navlinks">
          <div className="navlinks-container">
            <NavLink
              to="/info"
              className={({ isActive }) => (isActive ? "active-left-nav" : "")}
            >
              <img className="img-icon" src="./info.svg" alt="info" />
              <p>Mon compte</p>
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) => (isActive ? "active-left-nav" : "")}
            >
              <img className="img-icon" src="./help.svg" alt="help" />
              <p>Aide</p>
            </NavLink>
          </div>
          <small>Version beta 0.0.1 2023</small>
        </div>

        {/* <div className="release-version">
          <small>version Beta 0.0.1</small>
        </div> */}
      </div>
    </nav>
  );
};

export default Sidebar;
