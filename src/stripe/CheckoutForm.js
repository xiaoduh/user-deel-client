import React, { useContext, useState } from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { UidContext } from "../components/AppContext";
import { useDispatch } from "react-redux";
import { getUser } from "../actions/user.actions";

const CheckoutForm = ({
  closeCheckoutForm,
  plan,
  paymentSuccessful,
  paymentFailed,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const uid = useContext(UidContext);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  console.log(plan.credit);

  const handleSubmit = async (e) => {
    setLoading(true);
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
          `https://deeel-v0-test.onrender.com/api/stripe/charge/${uid}`,
          {
            amount: plan.amount,
            id: id,
            credit: plan.credit,
          }
        );
        if (response.data.success) {
          console.log("payment successful");
          setLoading(false);
          dispatch(getUser(uid));
        }
      } catch (error) {
        console.log("erreur :" + error);
        setLoading(false);
        closeCheckoutForm();
        paymentFailed();
      }
      closeCheckoutForm();
      paymentSuccessful();
    } else {
      setLoading(false);
      console.log(error.message);
      closeCheckoutForm();
      paymentFailed();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement options={{ hidePostalCode: true }} />
        <>
          <button type="submit">
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
          <button className="btn-cancel" onClick={() => closeCheckoutForm()}>
            Annuler
          </button>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;
