import React, { useContext, useState } from "react";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty, upperCase } from "../utils";
import Log from "./Log";

const Navbar = ({
  openIsPosting,
  openDiscussions,
  openGain,
}) => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const [handleLogin, setHandleLogin] = useState(false);
  const [signup, setSignup] = useState();
  const [signin, setSignin] = useState();
  const [active, setActive] = useState(false);
  const [links, setLinks] = useState(null);

  const handleActive = () => {
    setActive(!active);
  };

  const handleModals = (e) => {
    console.log(e.target.id);
    if (e.target.id === "register") {
      setSignin(false);
      setSignup(true);
      setHandleLogin(true);
    } else if (e.target.id === "login") {
      setSignup(false);
      setSignin(true);
      setHandleLogin(true);
    } else if (e.target.id === "unlogged") {
      setSignup(false);
      setSignin(true);
      setHandleLogin(true);
    }
  };

  const closeLog = () => {
    setHandleLogin(false);
  };

  const handleMyMessages = () => {
    handleActive();
    openDiscussions();
  };

  const handlePostAnnonce = () => {
    handleActive();
    openIsPosting();
  };

  const handleGain = () => {
    handleActive();
    openGain();
  };

  return (
    <>
      <nav>
        {!uid ? (
          <div className="left-container">
            <NavLink className="logo-unlog" to="/">
              <img src="./logo.png" alt="logo" className="logo" />
            </NavLink>
          </div>
        ) : null}
        {uid ? (
          <>
            <div className="left-container">
              <NavLink to="/">
                <img src="./logo.png" alt="logo" className="logo" />
              </NavLink>
              <div className="user-info-container">
                <p>Bonjour,</p>
                <h3>
                  {userData.pseudo
                    ? upperCase(userData.pseudo)
                    : " Pseudo non renseigné"}
                  <span> 👋</span>
                </h3>
              </div>
            </div>

            {active ? (
              <div className="menu-responsive active">
                <ul>
                  <li onClick={() => handleMyMessages()}>Mes messages</li>
                  <li onClick={() => handleGain()}>Mes gains</li>
                  <li onClick={() => handlePostAnnonce()}>
                    J'ai besoin d'une info
                  </li>
                  <li style={{ display: "flex", justifyContent: "center" }}>
                    {uid ? <Logout /> : <></>}
                  </li>
                </ul>
              </div>
            ) : (
              <div className="menu-responsive">
                <ul>
                  <li>Mes messages</li>
                  <li>Mes gains</li>
                  <li>J'ai besoin d'une info</li>
                  <li>Se connecter</li>
                  <li>Créer un compte</li>
                </ul>
              </div>
            )}
            <div className="login-container">
              {active ? (
                <div
                  className="burger-menu active"
                  onClick={() => handleActive()}
                ></div>
              ) : (
                <div
                  className="burger-menu"
                  onClick={() => handleActive()}
                ></div>
              )}
            </div>

            <div className="icon">
              <div className="chat" onClick={() => openDiscussions()}>
                <img src="./chat.svg" />
                <p className="text">Ma Messagerie</p>
              </div>

              <div className="credit-balance" onClick={() => openGain()()}>
                {userData.solde > 0 ? (
                  <>
                    <img src="./argent.svg" />
                    <p>
                      Mes gains{" "}
                      <span>
                        {!isEmpty(userData) &&
                          parseFloat(userData.solde).toFixed(2)}
                      </span>
                      <span style={{ color: "#109CF1" }}>€</span>
                    </p>
                  </>
                ) : (
                  <>
                    <img src="./argent.svg" />
                    <p>
                      Mes gains
                      <span>{!isEmpty(userData) && userData.solde}</span>
                      <span style={{ color: "#109CF1" }}>€</span>
                    </p>
                  </>
                )}
              </div>

              {uid ? (
                <div>
                  <button className="research" onClick={() => openIsPosting()}>
                    <p>J'ai besoin</p>
                    <div className="words">
                      <span className="word">d'un email ✉️</span>
                      <span className="word">d'un contact ✉️</span>
                      <span className="word">d'une mission 💼</span>
                      <span className="word">d'une reco ❤️</span>
                      <span className="word">d'une info 🕵️</span>
                      <span className="word">d'un email ✉️</span>
                    </div>
                  </button>
                </div>
              ) : (
                <div>
                  <button className="research" onClick={() => openIsPosting()}>
                    <p>Je cherche</p>
                    <div className="words">
                      <span className="word">un email ✉️</span>
                      <span className="word">un contact ✉️</span>
                      <span className="word">une mission 💼</span>
                      <span className="word">une reco ❤️</span>
                      <span className="word">une infos 🕵️</span>
                      <span className="word">un email ✉️</span>
                    </div>
                  </button>
                </div>
              )}
              {uid ? <Logout /> : <></>}
            </div>
          </>
        ) : !handleLogin ? (
          <>
            {active ? (
              <div className="menu-responsive active">
                <ul>
                  <li onClick={handleModals} id="login">
                    Mes messages
                  </li>
                  <li onClick={handleModals} id="login">
                    Mes gains
                  </li>
                  <li onClick={handleModals} id="login">
                    J'ai besoin d'une info
                  </li>
                  <li onClick={handleModals} id="login">
                    Se connecter
                  </li>
                  <li onClick={handleModals} id="register">
                    Créer un compte
                  </li>
                </ul>
              </div>
            ) : (
              <div className="menu-responsive">
                <ul>
                  <li>Mes messages</li>
                  <li>Mes gains</li>
                  <li>J'ai besoin d'une info</li>
                  <li>Se connecter</li>
                  <li>Créer un compte</li>
                </ul>
              </div>
            )}

            <div className="login-container">
              <div>
                <button
                  id="unlogged"
                  onClick={handleModals}
                  style={{ marginRight: "2rem" }}
                  className="research"
                >
                  <p onClick={handleModals} id="unlogged">
                    Je cherche
                  </p>
                  <div className="words" onClick={handleModals} id="unlogged">
                    <span className="word" id="unlogged" onClick={handleModals}>
                      un email ✉️
                    </span>
                    <span className="word" id="unlogged" onClick={handleModals}>
                      un contact ✉️
                    </span>
                    <span className="word" id="unlogged" onClick={handleModals}>
                      une mission 💼
                    </span>
                    <span className="word" id="unlogged" onClick={handleModals}>
                      une reco ❤️
                    </span>
                    <span className="word" id="unlogged" onClick={handleModals}>
                      une infos 🕵️
                    </span>
                    <span className="word" id="unlogged" onClick={handleModals}>
                      un email ✉️
                    </span>
                  </div>
                </button>
              </div>
              <button id="login" onClick={handleModals}>
                Se connecter
              </button>
              <button
                className="btn-secondary"
                id="register"
                onClick={handleModals}
              >
                Créer un compte
              </button>
              {active ? (
                <div
                  className="burger-menu active"
                  onClick={() => handleActive()}
                ></div>
              ) : (
                <div
                  className="burger-menu"
                  onClick={() => handleActive()}
                ></div>
              )}
            </div>
          </>
        ) : null}
        {handleLogin ? (
          <Log signin={signin} signup={signup} closeLog={closeLog} />
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
