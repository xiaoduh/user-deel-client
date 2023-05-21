import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Stripe from "../stripe/StripeContainer";

const Payment = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          <Stripe />
        </div>
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} buyer={true} seller={false} />
        </div>
      )}
    </>
  );
};

export default Payment;
