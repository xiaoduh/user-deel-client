import React, { useState } from "react";
import Checkout from "../Checkout/Checkout";
import PopupPaymentSuccess from "../Checkout/PopupPaymentSuccess";
import PopupPaymentFailed from "../Checkout/PopupPaymentFailed";

const PopupPayment = ({ closePayement, offer }) => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);

  const handlePopupSuccess = () => {
    setPaymentSuccessful(true);
  };

  const handlePopupFailed = () => {
    setPaymentFailed(true);
  };

  return (
    <>
      <div className="popup">
        <div className="modal">
          <div className="close-conv">
            <img
              src="./traverser.svg"
              alt="close"
              onClick={() => closePayement()}
            />
          </div>
          <form className="content-container">
            <div className="title-annonce">
              <div className="container">
                <Checkout
                  price={offer.price}
                  handlePopupSuccess={handlePopupSuccess}
                  handlePopupFailed={handlePopupFailed}
                  closePayement={closePayement}
                  offer={offer}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {paymentSuccessful && (
        <PopupPaymentSuccess closePayement={closePayement} />
      )}
      {paymentFailed && <PopupPaymentFailed closePayement={closePayement} />}
    </>
  );
};

export default PopupPayment;
