import React from "react";
import Stripe from "../../stripe/StripeContainer";

const Checkout = ({ plan, closeCheckoutForm }) => {
  return (
    <div className="plan-container">
      <div className="checkout">
        <div className="header-checkout">
          <h2>Récapitulatif de votre panier</h2>
        </div>
        <div className="checkout-content">
          <p>
            Vous avez choisi le plan{" "}
            <span style={{ color: "#109CF1", fontWeight: "bold" }}>
              {plan.credit}
            </span>{" "}
            {plan.credit > 1 ? "crédits" : "crédit"}
          </p>
          <p>
            <span style={{ color: "#109CF1", fontWeight: "bold" }}>
              {plan.credit}
            </span>{" "}
            {plan.credit > 1 ? "crédits" : "crédit"}
          </p>
          <p>
            Total de{" "}
            <span style={{ color: "#109CF1", fontWeight: "bold" }}>
              {plan.amount}
            </span>{" "}
            €
          </p>
        </div>
        <div className="cta-checkout">
          <p>Veuillez saisir vos informations de paiement</p>
          <Stripe closeCheckoutForm={closeCheckoutForm} plan={plan}/>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
