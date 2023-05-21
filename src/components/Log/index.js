import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SignIn from "./SignInForm";
import SignUp from "./SignUpForm";
import Navbar from "../Navbar/Navbar";
import Seller from "./Seller";
import Buyer from "./Buyer";
import Footer from "../Footer/Footer";

const Log = (props) => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.signin);
  const [sellerModal, setSellerModal] = useState(props.seller);
  const [buyerModal, setBuyerModal] = useState(props.buyer);

  useEffect(() => {
    leadsData[0] && setIsLoading(false);
  }, [isLoading, leadsData]);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    } else if (e.target.id === "seller") {
      setSellerModal(true);
      setBuyerModal(false);
    } else if (e.target.id === "buyer") {
      setSellerModal(false);
      setBuyerModal(true);
    }
  };

  return (
    <>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin loading"></i>
      ) : (
        <>
          <Navbar leadsData={leadsData} />
          <div className="connection-form">
            <div className="info-container">
              <ul style={{ marginBottom: "2rem" }}>
                <li
                  onClick={handleModals}
                  id="seller"
                  className={sellerModal ? "active-btn seller" : null}
                >
                  Je suis ingénieur 👨‍💻
                </li>
                <li
                  onClick={handleModals}
                  id="buyer"
                  className={buyerModal ? "active-btn" : null}
                >
                  Je suis commercial en P2i 💼
                </li>
              </ul>
              {sellerModal && <Seller leadsData={leadsData} />}
              {buyerModal && <Buyer leadsData={leadsData} />}
            </div>
            <div className="form-container">
              <ul>
                <li
                  onClick={handleModals}
                  id="register"
                  className={signUpModal ? "active-btn" : null}
                >
                  S'inscrire
                </li>
                <li
                  onClick={handleModals}
                  id="login"
                  className={signInModal ? "active-btn" : null}
                >
                  Se connecter
                </li>
              </ul>
              {signUpModal && <SignUp leadsData={leadsData} />}
              {signInModal && <SignIn leadsData={leadsData} />}
            </div>
          </div>
          <Footer />
        </>
      )}
      {}
    </>
  );
};

export default Log;
