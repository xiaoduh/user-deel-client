import React, { useState } from "react";
import { useSelector } from "react-redux";

const ConvertCredit = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const [amount, setAmount] = useState(0);
  return (
    <main>
      <div className="grid-form-need">
        <div className="title-container" style={{ marginBottom: "2rem" }}>
          <h3>Transferer votre solde sur votre compte</h3>
          <p>
            Convertissez vos crédits en € et faites une demande de virement sur
            votre compte bancaire.
          </p>
        </div>
        <>
          <div className="left-side">
            <h3>
              Vous avez
              <span style={{ color: "#109CF1" }}> {user.coin}</span> crédits
              soit une somme totale de{" "}
              <span style={{ color: "#109CF1" }}>{user.coin * 12.5}</span> €
            </h3>
            <p>Choisissez le nombre de crédit à convertir</p>
            <input
              type="range"
              id="amount"
              min={0}
              max={user.coin}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="amount-container">
              <h2>
                <span style={{ color: "#2ED47A" }}>{amount}</span> crédits,
                <span> soit un montant net de </span>{" "}
                <span style={{ color: "#2ED47A" }}>{amount * 12.5}</span> €
              </h2>
            </div>
          </div>
          <div></div>
          <div className="btn-container">
            <button>
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                <p>Valider ma demande de virement</p>
              )}
            </button>
            <div className="form-message"></div>
          </div>
        </>
      </div>
    </main>
  );
};

export default ConvertCredit;
