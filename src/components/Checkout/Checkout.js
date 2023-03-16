import React from "react";

const Checkout = ({ plan, closeCheckoutForm }) => {
  return (
    <div className="plan-container">
      <div className="checkout">
        <div className="header-checkout">
          <h2>Récapitulatif de mon panier</h2>
        </div>
        <div className="checkout-content">
          <p>
            Vous avez choisi le plan{" "}
            <span style={{ color: "#109CF1", fontWeight: "bold" }}>
              {plan.credit}
            </span>{" "}
            crédit(s)
          </p>
          <p>{plan.credit} crédit (s)</p>
          <p>{plan.amount} €</p>
        </div>
        <div className="cta-checkout">
          <button className="btn-cancel" onClick={() => closeCheckoutForm()}>
            Annuler
          </button>
          <button onClick={() => closeCheckoutForm()}>
            Confirmer mon paiement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
