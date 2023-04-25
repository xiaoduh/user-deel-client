import React from "react";

const PopupReliability = ({ closePopupReliability }) => {
  return (
    <div className="popup">
      <div className="modal">
        <h3>
          Que veut dire l'
          <span style={{ color: "#109CF1" }}>indice de fiabilité </span> ?
        </h3>
        <p>
          L'indice de fiabilité permet de classer les contacts en deux
          catégories:{" "}
          <span style={{ color: "#109CF1", fontWeight: "bold" }}>vérifié</span>{" "}
          <img
            style={{ widht: "12px", height: "12px", margin: "0" }}
            src="/verified.svg"
            alt="verified"
          />{" "}
          et{" "}
          <span style={{ color: "#109CF1", fontWeight: "bold" }}>
            non-vérifié
          </span>{" "}
          <img
            style={{ widht: "12px", height: "12px", margin: "0" }}
            src="/aide.svg"
            alt="no-verified"
          />
          .<br></br>
          <img
            style={{ widht: "12px", height: "12px", margin: "0" }}
            src="/verified.svg"
            alt="verified"
          />{" "}
          : <span style={{ color: "#109CF1", fontWeight: "bold" }}>toutes</span>{" "}
          les informations ont pu être vérifiées et validées.<br></br>
          <img
            style={{ widht: "12px", height: "12px", margin: "0" }}
            src="/aide.svg"
            alt="no-verified"
          />{" "}
          : <span style={{ color: "#109CF1", fontWeight: "bold" }}>toutes</span>{" "}
          les informations n'ont pas pu être vérifiées et validées ou sont en
          cours de vérification.
        </p>
        <div className="btn-unlock">
          <button onClick={() => closePopupReliability()}>J'ai compris</button>
        </div>
      </div>
    </div>
  );
};

export default PopupReliability;
