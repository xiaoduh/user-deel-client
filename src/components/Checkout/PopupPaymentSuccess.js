import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const PopupPaymentSuccess = () => {
  const user = useSelector((state) => state.userReducer);
  return (
    <div className="popup">
      <div className="modal">
        <h3>Paiment réussi !</h3>
        <img className="icon-succes" src="./succes.svg" alt="success" />
        <p>
          Votre solde est maintenant de{" "}
          <span style={{ color: "#109CF1" }}>{user.coin}</span>{" "}
          {user.coin > 1 ? "crédits" : "crédit"}
        </p>
        <div className="btn-unlock">
          <NavLink to="/marketplace">
            <button className="btn-confirm" id="paiement-failed">
              Retour à la marketplace
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PopupPaymentSuccess;
