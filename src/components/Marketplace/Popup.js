import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLeads } from "../../actions/leads.actions";
import { buyLead } from "../../actions/user.actions";
import { getUser } from "../../actions/user.actions";

const Popup = ({ lead, closePopup }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const confirmBuy = async () => {
    await dispatch(buyLead(lead._id, user._id, lead.dealerID));
    await dispatch(getUser(user._id));
    dispatch(getLeads());
    closePopup();
  };
  return (
    <div className="popup">
      <div className="modal">
        <h3>
          Voulez-vous dépenser <span style={{ color: "#109CF1" }}>1</span>{" "}
          crédit pour débloquer ce lead ?
        </h3>
        <p>
          Votre solde est de{" "}
          <span style={{ color: "#109CF1" }}>{user.coin}</span>{" "}
          {user.coin > 1 ? "crédits" : "crédit"}
        </p>
        <div className="btn-unlock">
          <button className="btn-cancel" onClick={() => closePopup()}>
            Annuler
          </button>
          {user.coin > 0 ? (
            <button className="btn-confirm" onClick={confirmBuy}>
              Confirmer
            </button>
          ) : (
            <NavLink to="/store">
              <button className="btn-confirm">Acheter des crédits</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
