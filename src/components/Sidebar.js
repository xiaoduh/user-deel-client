import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty, upperCase } from "../utils";

const Sidebar = () => {
  const userData = useSelector((state) => state.userReducer);
  const leadsData = useSelector((state) => state.leadsReducer);

  console.log(userData.user_data == "business_provider");

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
              <p>Bonjour,</p>
              <h3>
                {!isEmpty(userData.first_name) &&
                  upperCase(userData.first_name)}{" "}
                {!isEmpty(userData.last_name) && upperCase(userData.last_name)}{" "}
                <span style={{ fontSize: "1rem" }}>👋</span>
              </h3>
              <small>
                Tu es{" "}
                {userData.user_type == "business_provider"
                  ? "apporteur d'affaires."
                  : "commercial."}
              </small>
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
                  {/* <img
                    className="img-icon"
                    src="./panier-ajouter.svg"
                    alt="marketplace"
                  /> */}
                  <p>
                    <span style={{ fontSize: "1rem" }}>🕵️ </span>
                    Apports d'affaires (
                    {!isEmpty(leadsData) && leadsData?.length})
                  </p>
                </NavLink>
              )}
              <NavLink
                to="/conversation"
                className={({ isActive }) =>
                  isActive ? "active-left-nav" : ""
                }
              >
                {/* <img
                  className="img-icon"
                  src="./commentaires.svg"
                  alt="mes échanges"
                /> */}
                <p>
                  <span style={{ fontSize: "1rem" }}>💬 </span>
                  Mes échanges (
                  {!isEmpty(userData) && userData?.lead_bought.length})
                </p>
              </NavLink>
              {userData.isBusinessProvider && (
                <NavLink
                  to="/announce"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  {/* <img
                    className="img-icon"
                    src="./dashboard.svg"
                    alt="contact"
                  /> */}
                  <p>
                    {" "}
                    <span style={{ fontSize: "1rem" }}>📊 </span>
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
                  {/* <img className="img-icon" src="./plus.svg" alt="sales" /> */}
                  <p>
                    <span style={{ fontSize: "1rem" }}>📁 </span> Apporter une
                    affaire
                  </p>
                </NavLink>
              )}
              {userData.isBusinessProvider && (
                <NavLink
                  to="/transfert"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  {/* <img className="img-icon" src="./banque.svg" alt="store" /> */}
                  <p>
                    <span style={{ fontSize: "1rem" }}>🔄 </span> Convertir mes
                    crédits
                  </p>
                </NavLink>
              )}

              {userData.isSales && (
                <NavLink
                  to="/store"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  {/* <img className="img-icon" src="./store.svg" alt="store" /> */}
                  <p>
                    <span style={{ fontSize: "1rem" }}>💳 </span> Acheter des
                    crédits
                  </p>
                </NavLink>
              )}
              <NavLink
                to="/info"
                className={({ isActive }) =>
                  isActive ? "active-left-nav" : ""
                }
              >
                {/* <img className="img-icon" src="./info.svg" alt="info" /> */}
                <p>
                  {" "}
                  <span style={{ fontSize: "1rem" }}>👀 </span>Mon compte
                </p>
              </NavLink>
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  isActive ? "active-left-nav" : ""
                }
              >
                {/* <img
                  className="img-icon"
                  src="./interrogatoire.svg"
                  alt="help"
                /> */}
                <p>
                  <span style={{ fontSize: "1rem" }}>☎️ </span>Aide
                </p>
              </NavLink>
              {userData.isSales && (
                <NavLink
                  to="/report"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  {/* <img
                    className="img-icon"
                    src="./rafraichir.svg"
                    alt="report"
                  /> */}
                  <p>
                    <span style={{ fontSize: "1rem" }}>📢 </span>Remboursement
                  </p>
                </NavLink>
              )}
              {userData.isAdmin && (
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive ? "active-left-nav" : ""
                  }
                >
                  {/* <img className="img-icon" src="./admin.svg" alt="report" /> */}
                  <p>
                    <span style={{ fontSize: "1rem" }}>👑 </span>Administrateur
                  </p>
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <small className="version">Version beta 0.1.1 2023</small>
      </nav>
    </>
  );
};

export default Sidebar;
