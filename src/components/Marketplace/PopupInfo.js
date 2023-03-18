import React from "react";

const PopupInfo = ({ closePopupInfo }) => {
  return (
    <div className="popup">
      <div className="modal">
        <h3>
          Que veut dire l'
          <span style={{ color: "#109CF1" }}>indice qualité</span> ?
        </h3>
        <p>
          L'indice qualité prend en compte la richesse des informations
          collectées sur le contact. Les informations comptant pour le calcul de
          l'indice qualité sont : le{" "}
          <span style={{ color: "#109CF1", fontWeight: "bold" }}>nom</span>,{" "}
          <span style={{ color: "#109CF1", fontWeight: "bold" }}>prénom</span>,{" "}
          <span style={{ color: "#109CF1", fontWeight: "bold" }}>email</span>,
          et <span style={{ color: "#109CF1", fontWeight: "bold" }}>rôle</span>{" "}
          du contact.
          <br></br>Vous aurez toujours au minimum l'
          <span style={{ color: "#109CF1", fontWeight: "bold" }}>
            entreprise
          </span>{" "}
          et le{" "}
          <span style={{ color: "#109CF1", fontWeight: "bold" }}>
            profil recherché
          </span>
          .<br></br> > 75% indique que toutes les informations sont présentes.
        </p>
        <div className="btn-unlock">
          <button onClick={() => closePopupInfo()}>J'ai compris</button>
        </div>
      </div>
    </div>
  );
};

export default PopupInfo;
