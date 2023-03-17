import React from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ closeCheckoutForm }) => {
  const stripe = useStripe();
  const elements = useElements();
  console.log(closeCheckoutForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log("Token Généré", paymentMethod);
      closeCheckoutForm();
      //pop achat reussi
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ hidePostalCode: true }} />
      <button type="submit">Confirmer mon paiement</button>
      <button className="btn-cancel" onClick={() => closeCheckoutForm()}>
        Annuler
      </button>
    </form>
  );
};

export default CheckoutForm;
