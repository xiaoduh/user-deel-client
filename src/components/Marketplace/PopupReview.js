import React from "react";

const PopupReview = ({ closePopupReview }) => {
  return (
    <div className="popup">
      <div className="modal">
        <h3>
          Comment interpréter la
          <span style={{ color: "#109CF1" }}> réputation </span> ?
        </h3>
        <p>
          La réputation prend en compte toutes les évaluations reçues par
          l'apporteur d'affaires sur ces affaires publiées. Après chaque mise en
          relation, vous êtes invité à noter (sur 5) les informations reçues par
          votre apporteur d'affaires.
          <br></br>
        </p>
        <div className="btn-unlock">
          <button onClick={() => closePopupReview()}>J'ai compris</button>
        </div>
      </div>
    </div>
  );
};

export default PopupReview;
