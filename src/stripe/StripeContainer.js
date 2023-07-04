import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51MmFnAAFkffstGESiUofja54O8QkibxvCmxb9eIKThBRJ5t0rWd0tgYBGXu9Vap29MQGppZ4kvddedOzx3F3yEDG00HbIU0Hoc";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({
  closePayement,
  price,
  handlePopupSuccess,
  handlePopupFailed,
  offer,
}) => {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: "{{CLIENT_SECRET}}",
  // };
  return (
    <Elements
      stripe={stripeTestPromise}
      // options={options}
      price={price}
    >
      <CheckoutForm
        price={price}
        closePayement={closePayement}
        handlePopupFailed={handlePopupFailed}
        handlePopupSuccess={handlePopupSuccess}
        offer={offer}
      />
    </Elements>
  );
};

export default Stripe;
