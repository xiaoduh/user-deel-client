import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_live_51MmFnAAFkffstGEScgHou9CEY4fbTh8nu5nLW9D9CTVu7L3uk8CLmfK49N00i813C1Bd9Q8dMLFI1oTYepyzkFL800ydBeOcj1";
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
