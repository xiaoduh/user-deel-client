import React from "react";

const PopupPaymentFailed = ({ closePayement }) => {
  return (
    <div className="popup">
      <div className="modal">
        <div className="payment-successful">
          <h3>Le paiment a échoué !</h3>
          <img className="icon-succes" src="./failed.svg" alt="failed" />
          <div className="btn-unlock">
            <button
              className="btn-confirm"
              id="paiement-failed"
              onClick={() => closePayement()}
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupPaymentFailed;
