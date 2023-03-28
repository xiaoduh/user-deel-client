import React, { useEffect, useState } from "react";
import Logout from "../Log/Logout";
import { NavLink } from "react-router-dom";

const TwoFA = ({ handleTwoFA, userData }) => {
  const [codeUser, setCodeUser] = useState("null");
  const [codeGenerated, setCodeGenerated] = useState(
    Math.round(Math.random() * 10000)
  );
  const [isVerified, setIsVerified] = useState(false);

  const verifyNumPhone = (e, codeUser, codeGenerated) => {
    e.preventDefault();
    // console.log(typeof codeUser);
    // console.log(typeof codeGenerated);
    if (codeUser == codeGenerated) {
      console.log("vérifié");
      setIsVerified(true);
    } else {
      console.log("bad number");
    }
  };

  const sendCode = (codeGenerated) => {
    const url =
      "https://api.twilio.com/2010-04-01/Accounts/ACb520541f549c9efe149f562714a5c72e/Messages.json";
    const auth =
      "ACb520541f549c9efe149f562714a5c72e:5724467d1844130d9161c418c958dd6d";
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(auth),
    });
    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body:
        "To=+33686553473&From=+16729060660&Body=Bonjour, voici votre code pour relier votre numéro à votre compte Deeel : " +
        codeGenerated,
    };
    fetch(url, init)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    sendCode(codeGenerated);
  }, []);

  return (
    <>
      {!isVerified ? (
        <div className="twoFA-container">
          <img src="/exclamation.svg" />
          <h3>Veuillez confirmer votre connexion.</h3>
          <form onSubmit={(e) => verifyNumPhone(e, codeUser, codeGenerated)}>
            <label htmlFor="">
              Entrez le code envoyé au numéro se terminant par{" "}
              {userData.phone_number ? userData.phone_number.slice(6) : "non"}
            </label>
            <input
              type="text"
              onChange={(e) => setCodeUser(e.target.value)}
              required
            />
            <button type="submit">Valider ma connexion</button>
          </form>
          <div className="resend-container">
            <p>Renvoyer le SMS</p>
          </div>
          <div className="logout">
            <p>Abandonner</p>
            <Logout />
          </div>
        </div>
      ) : (
        <div className="twoFA-container">
          <img src="/succes.svg" />
          <h3>
            Félicitations, votre compte Deeel est maintenant activé et sécurisé.
          </h3>
          <NavLink to="/">
            <button onClick={() => handleTwoFA(userData)}>Poursuivre</button>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default TwoFA;
