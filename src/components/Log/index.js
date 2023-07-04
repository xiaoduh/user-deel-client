import React, { useState } from "react";
import SignIn from "./SignInForm";
import SignUp from "./SignUpForm";

const Log = ({ signup, signin, closeLog, fromPopupIsLogged }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [signUpModal, setSignUpModal] = useState(signup);
  const [signInModal, setSignInModal] = useState(signin);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <>
      {/* <Navbar leadsData={leadsData} /> */}
      <div className="log">
        {fromPopupIsLogged ? null : (
          <div className="closeLog">
            <img src="./traverser.svg" alt="close" onClick={() => closeLog()} />
          </div>
        )}

        <div className="connection-form">
          {/* <div className="info-container">
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
            </div> */}
          <div className="form-container" style={{ margin: "0 auto" }}>
            <ul>
              <li
                onClick={handleModals}
                id="register"
                className={signUpModal ? "active-btn" : null}
              >
                Créer un compte
              </li>
              <li
                onClick={handleModals}
                id="login"
                className={signInModal ? "active-btn" : null}
              >
                Se connecter
              </li>
            </ul>
            {signUpModal && <SignUp />}
            {signInModal && <SignIn />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Log;
