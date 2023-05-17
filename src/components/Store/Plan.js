import React, { useState } from "react";
import Checkout from "../Checkout/Checkout";
import PopupPaymentFailed from "../Checkout/PopupPaymentFailed";
import PopupPaymentSuccess from "../Checkout/PopupPaymentSuccess";

const Plan = () => {
  const [checkout, setCheckout] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [plan, setPlan] = useState();

  const planA = {
    credit: 1,
    amount: 1990,
    price: "19,90",
  };

  const planB = {
    credit: 5,
    amount: 9950,
    price: "99,50",
  };

  const planC = {
    credit: 10,
    amount: 19000,
    price: "199,00",
  };

  const handleCheckoutForm = (plan) => {
    setPlan(plan);
    setCheckout(true);
  };

  const closeCheckoutForm = () => {
    setCheckout(false);
  };

  const handlePopupSuccess = () => {
    setPaymentSuccessful(true);
  };

  const handlePopupFailed = () => {
    setPaymentFailed(true);
  };

  return (
    <main>
      <div className="main-plan grid-form-need">
        <div className="title-container">
          <h3>Créditer mon compte</h3>
          <p>Ne payez uniquement les besoins qui vous intéressent.</p>
        </div>
        {checkout ? (
          <Checkout
            plan={plan}
            closeCheckoutForm={closeCheckoutForm}
            paymentSuccessful={handlePopupSuccess}
            paymentFailed={handlePopupFailed}
          />
        ) : (
          <>
            <div className="wrapper planA">
              <div className="header-plan">
                <h2>
                  <span>1</span> Crédit
                </h2>
                <small>19,90€ par apport d'affaire</small>
              </div>
              <div className="plan-content">
                <p>
                  19,<span> 90 €</span>
                </p>
                <small>TTC</small>
              </div>
              <button
                className="btn-confirm"
                onClick={() => handleCheckoutForm(planA)}
              >
                Acheter
              </button>
            </div>
            <div className="wrapper planB">
              <div className="header-plan">
                <h2>
                  <span>5</span> Crédits
                </h2>
                <small>19,90€ par apport d'affaire</small>
              </div>
              <div className="plan-content">
                <p>
                  99,<span> 50 €</span>
                </p>
                <small>TTC</small>
              </div>
              <button
                className="btn-confirm"
                onClick={() => handleCheckoutForm(planB)}
              >
                Acheter
              </button>
            </div>
            <div className="wrapper planC">
              <div className="header-plan">
                <h2>
                  <span>10</span> Crédits
                </h2>
                <small>19,90€ par apport d'affaire</small>
              </div>
              <div className="plan-content">
                <p>
                  199,<span> 00 €</span>
                </p>
                <small>TTC</small>
              </div>
              <button
                className="btn-confirm"
                onClick={() => handleCheckoutForm(planC)}
              >
                Acheter
              </button>
            </div>
          </>
        )}
        {paymentSuccessful ? <PopupPaymentSuccess /> : null}
        {paymentFailed ? <PopupPaymentFailed /> : null}
      </div>
    </main>
  );
};

export default Plan;
