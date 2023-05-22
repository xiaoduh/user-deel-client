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
          Voulez-vous dépenser{" "}
          <span style={{ color: "#109CF1" }}>
            {parseFloat(lead.price) * 0.2 + parseFloat(lead.price)}
          </span>{" "}
          {lead.price > 1 ? "euros" : "euro"} pour contacter cet apporteur
          d'affaire ?
        </h3>
        <p>
          Votre solde sera de{" "}
          <span style={{ color: "#109CF1" }}>
            {parseFloat(user.coin) -
              (parseFloat(lead.price) * 0.2 + parseFloat(lead.price))}
          </span>{" "}
          {user.coin > 1 ? "euros" : "euro"}
        </p>
        <div className="btn-unlock">
          <button className="btn-cancel" onClick={() => closePopup()}>
            Annuler
          </button>
          {parseFloat(user.coin) >
          parseFloat(lead.price) * 0.2 + parseFloat(lead.price) ? (
            <button className="btn-confirm" onClick={confirmBuy}>
              Confirmer
            </button>
          ) : (
            <NavLink to="/store">
              <button className="btn-confirm">Charger mon compte en €</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
