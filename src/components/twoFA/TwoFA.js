import React, { useState } from "react";
import Logout from "../Log/Logout";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const TwoFA = ({ handleTwoFA }) => {
  const [code, setCode] = useState();
  const [isVerified, setIsVerified] = useState(false);
  const userData = useSelector((state) => state.userReducer);

  const verifyNumPhone = (e) => {
    e.preventDefault();
    console.log(code);
    if (code === "1408") {
      console.log("vérifié");
      setIsVerified(true);
    } else {
      console.log("bad number");
    }
  };

  return (
    <>
      {!isVerified ? (
        <div className="twoFA-container">
          <img src="/exclamation.svg" />
          <h3>
            Veuillez vérifier votre numéro de téléphone en l'associant à votre
            compte Deeel.
          </h3>
          <form onSubmit={verifyNumPhone}>
            <label htmlFor="">
              Entrez le code envoyé au numéro se terminant par
            </label>
            <input
              type="number"
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button type="submit">Vérifier mon numéro</button>
          </form>
          <div className="resend-container">
            <p>Renvoyer un SMS</p>
          </div>
          <div className="logout">
            <p>Abandonner</p>
            <Logout />
          </div>
        </div>
      ) : (
        <div className="twoFA-container">
          <img src="/succes.svg" />
          <h3>
            Félicitations, votre compte Deeel est maintenant activé et sécurisé.
          </h3>
          <NavLink to="/">
            <button onClick={() => handleTwoFA(userData)}>Poursuivre</button>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default TwoFA;
