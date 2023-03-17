import React from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ closeCheckoutForm, plan }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    console.log(plan.amount);
    e.preventDefault();
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
          `${process.env.REACT_APP_API_URL}api/stripe/charge`,
          {
            amount: plan.amount,
            id: id,
          }
        );
        if (response.data.success)
          console.log("payment successful : " + response);
      } catch (error) {
        console.log("erreur :" + error);
      }
      closeCheckoutForm();
      //pop achat reussi
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Confirmer mon paiement</button>
      <button className="btn-cancel" onClick={() => closeCheckoutForm()}>
        Annuler
      </button>
    </form>
  );
};

export default CheckoutForm;
