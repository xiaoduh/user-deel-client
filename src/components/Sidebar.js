import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty, upperCase } from "../utils";

const Sidebar = () => {
  const userData = useSelector((state) => state.userReducer);
  const leadsData = useSelector((state) => state.leadsReducer);

  return (
    <>
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
                {!isEmpty(userData) && upperCase(userData.first_name)}{" "}
                {!isEmpty(userData) && upperCase(userData.last_name)}
              </h3>
              <small>{userData.email}</small>
            </div>
          </div>
          <div className="navlinks">
            <div className="navlinks-container">
              {userData.isSales && (
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  <img
                    className="img-icon"
                    src="./panier-ajouter.svg"
                    alt="marketplace"
                  />
                  <p>
                    Marketplace ({!isEmpty(leadsData) && leadsData?.length})
                  </p>
                </NavLink>
              )}
              {userData.isBusinessProvider && (
                <NavLink
                  to="/announce"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  <img
                    className="img-icon"
                    src="./dashboard.svg"
                    alt="contact"
                  />
                  <p>
                    Tableau de bord ({!isEmpty(userData) && userData.nb_lead})
                  </p>
                </NavLink>
              )}
              {userData.isBusinessProvider && (
                <NavLink
                  to="/lead"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  <img className="img-icon" src="./plus.svg" alt="sales" />
                  <p>Apporter une affaire</p>
                </NavLink>
              )}
              {userData.isBusinessProvider && (
                <NavLink
                  to="/transfert"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  <img className="img-icon" src="./banque.svg" alt="store" />
                  <p>Convertir mes crédits</p>
                </NavLink>
              )}
              <NavLink
                to="/conversation"
                className={({ isActive }) =>
                  isActive ? "active-left-nav" : ""
                }
              >
                <img
                  className="img-icon"
                  src="./commentaires.svg"
                  alt="mes échanges"
                />
                <p>
                  Mes échanges (
                  {!isEmpty(userData) && userData?.lead_bought.length})
                </p>
              </NavLink>
              {userData.isSales && (
                <NavLink
                  to="/store"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  <img className="img-icon" src="./store.svg" alt="store" />
                  <p>Crédits</p>
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <div className="lower-container">
          <div className="navlinks">
            <div className="navlinks-container">
              <NavLink
                to="/info"
                className={({ isActive }) =>
                  isActive ? "active-left-nav" : ""
                }
              >
                <img className="img-icon" src="./info.svg" alt="info" />
                <p>Mon compte</p>
              </NavLink>
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  isActive ? "active-left-nav" : ""
                }
              >
                <img
                  className="img-icon"
                  src="./interrogatoire.svg"
                  alt="help"
                />
                <p>Aide</p>
              </NavLink>
              {userData.isSales && (
                <NavLink
                  to="/report"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  <img
                    className="img-icon"
                    src="./rafraichir.svg"
                    alt="report"
                  />
                  <p>Remboursement</p>
                </NavLink>
              )}
            </div>
            <small>Version beta 0.1.1 2023</small>
          </div>

          {/* <div className="release-version">
          <small>version Beta 0.0.1</small>
        </div> */}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
