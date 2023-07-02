import React, { useState } from "react";
import SignIn from "./SignInForm";
import SignUp from "./SignUpForm";

const Log = ({ signup, signin, closeLog, fromPopupIsLogged }) => {
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
      <div className="log">
        {fromPopupIsLogged ? null : (
          <div className="closeLog">
            <img src="./traverser.svg" alt="close" onClick={() => closeLog()} />
          </div>
        )}

        <div className="connection-form">

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
