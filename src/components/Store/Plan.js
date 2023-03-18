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
    amount: 9999,
    price: "99,99",
  };

  const planB = {
    credit: 5,
    amount: 34599,
    price: "345,99",
  };

  const planC = {
    credit: 10,
    amount: 49999,
    price: "499,99",
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
    <main className="main-plan">
      {checkout ? (
        <Checkout
          plan={plan}
          closeCheckoutForm={closeCheckoutForm}
          paymentSuccessful={handlePopupSuccess}
          paymentFailed={handlePopupFailed}
        />
      ) : (
        <div className="plan-container">
          <div className="wrapper">
            <div className="header-plan">
              <h2>
                <span>1</span> Crédit
              </h2>
              <small>99,99€ par contact</small>
            </div>
            <div className="plan-content">
              <p>
                99,<span> 99 €</span>
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
          <div className="wrapper main-plan">
            <div className="header-plan">
              <h2>
                <span>5</span> Crédits
              </h2>
              <small>69,99€ par contact</small>
            </div>
            <div className="plan-content">
              <p>
                345,<span> 99 €</span>
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
          <div className="wrapper">
            <div className="header-plan">
              <h2>
                <span>10</span> Crédits
              </h2>
              <small>49,99€ par contact</small>
            </div>
            <div className="plan-content">
              <p>
                499,<span> 99 €</span>
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
        </div>
      )}
      {paymentSuccessful ? <PopupPaymentSuccess /> : null}
      {paymentFailed ? <PopupPaymentFailed /> : null}
    </main>
  );
};

export default Plan;
