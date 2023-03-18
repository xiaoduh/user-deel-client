import React from "react";
import { NavLink } from "react-router-dom";

const PopupPaymentFailed = () => {
  return (
    <div className="popup">
      <div className="modal">
        <h3>Le paiment a échoué !</h3>
        <img className="icon-succes" src="./failed.svg" alt="failed" />
        <div className="btn-unlock">
          <NavLink to="/plan">
            <button className="btn-confirm" id="paiement-failed">
              Retour
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PopupPaymentFailed;
