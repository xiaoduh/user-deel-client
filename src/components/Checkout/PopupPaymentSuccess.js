import React from "react";

const PopupPaymentSuccess = ({ closePayement }) => {
  return (
    <div className="popup">
      <div className="modal">
        <div className="payment-successful">
          <h3>Paiment réussi !</h3>
          <p>
            Vous pouvez contacter votre informateur pour obtenir vos
            informations 🔓
          </p>
          <img className="icon-succes" src="./succes.svg" alt="success" />

          <div className="btn-unlock">
            <button
              className="btn-confirm"
              id="paiement-failed"
              onClick={() => closePayement()}
            >
              Contacter mon informateur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupPaymentSuccess;
