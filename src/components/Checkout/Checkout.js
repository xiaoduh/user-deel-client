import React from "react";
import Stripe from "../../stripe/StripeContainer";

const Checkout = ({
  price,
  closePayement,
  handlePopupSuccess,
  handlePopupFailed,
  offer,
}) => {
  return (
    <div className="plan-container">
      <div className="checkout">
        <div className="header-checkout">
          <h2>
            Accepter l'offre à <span> {price} €</span>
          </h2>
        </div>
        <div className="cta-checkout">
          <p>Veuillez saisir vos informations de paiement</p>
          <Stripe
            price={price}
            handlePopupSuccess={handlePopupSuccess}
            handlePopupFailed={handlePopupFailed}
            closePayement={closePayement}
            offer={offer}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
