import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51MmFnAAFkffstGESiUofja54O8QkibxvCmxb9eIKThBRJ5t0rWd0tgYBGXu9Vap29MQGppZ4kvddedOzx3F3yEDG00HbIU0Hoc";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({ closeCheckoutForm }) => {
  return (
    <Elements stripe={stripeTestPromise} closeCheckoutForm={closeCheckoutForm}>
      <CheckoutForm closeCheckoutForm={closeCheckoutForm} />
    </Elements>
  );
};

export default Stripe;
