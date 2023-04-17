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
    amount: 2990,
    price: "29,90",
  };

  const planB = {
    credit: 5,
    amount: 12450,
    price: "124,50",
  };

  const planC = {
    credit: 10,
    amount: 19090,
    price: "199,90",
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
      <div className="main-plan">
        <div className="title-container">
          <h3>
            <span style={{ color: "#109CF1" }}>Créditer</span> mon compte
          </h3>
          <p>
            Payez uniquement pour ce qui a de la valeur pour votre business.
          </p>
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
                <small>29,90€ par besoin</small>
              </div>
              <div className="plan-content">
                <p>
                  29,<span> 90 €</span>
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
                <small>24,90€ par besoin</small>
              </div>
              <div className="plan-content">
                <p>
                  124,<span> 50 €</span>
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
                <small>19,90€ par besoin</small>
              </div>
              <div className="plan-content">
                <p>
                  199,<span> 90 €</span>
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
