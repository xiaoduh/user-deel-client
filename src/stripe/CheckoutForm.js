import React, { useContext, useState } from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { UidContext } from "../components/AppContext";
import { useDispatch } from "react-redux";
import { acceptOffer, getOffers } from "../actions/offers.actions";

const CheckoutForm = ({
  closePayement,
  price,
  handlePopupFailed,
  handlePopupSuccess,
  offer,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const uid = useContext(UidContext);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // `https://deeel-v0-test.onrender.com/api/stripe/charge/${uid}`

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Token Généré", paymentMethod);
      // envoie du token au backend **peut être faire un dispach/action pour mettre à jour le store**
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          `http://localhost:5000/api/stripe/charge/${uid}`,
          {
            amount: price,
            id: id,
          }
        );
        if (response.data.success) {
          console.log("payment successful");
          if (offer.userID !== uid) {
            await dispatch(
              acceptOffer(offer.uniqueRoomID, offer.userID, price)
            );
            await dispatch(getOffers());
            setLoading(false);
            handlePopupSuccess();
          }
          return null;
        }
      } catch (error) {
        console.log("erreur :" + error);
        setLoading(false);
        handlePopupFailed();
      }
      setLoading(false);
      handlePopupSuccess();
    } else {
      setLoading(false);
      console.log(error.message);
      handlePopupFailed();
    }
  };

  return (
    <>
      {price ? (
        <form>
          <CardElement options={{ hidePostalCode: true }} />
          <>
            <button onClick={(e) => handleSubmit(e)}>
              {" "}
              {loading ? (
                <>
                  Chargement... <i className="fas fa-spinner fa-spin"></i>
                </>
              ) : (
                <p style={{ color: "white", margin: "0" }}>
                  Confirmer mon paiement
                </p>
              )}{" "}
            </button>
          </>
          {loading ? (
            ""
          ) : (
            <button className="btn-cancel" onClick={() => closePayement()}>
              Annuler
            </button>
          )}
        </form>
      ) : null}
    </>
  );
};

export default CheckoutForm;
