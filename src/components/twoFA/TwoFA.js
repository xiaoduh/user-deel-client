import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import Logout from "../Log/Logout";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { UidContext } from "../AppContext";

const TwoFA = ({ handleTwoFA }) => {
  const [codeUser, setCodeUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [codeGenerated, setCodeGenerated] = useState(null);
  const userData = useSelector((state) => state.userReducer);
  const uid = useContext(UidContext);

  const verifyNumPhone = (e, codeUser, codeGenerated) => {
    e.preventDefault();
    if (codeUser == codeGenerated) {
      console.log("vérifié");
      setIsVerified(true);
    } else {
      console.log("bad number");
    }
  };

  const sendCode = (codeGenerated, number) => {
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
      body: `To=${number}&From=+16729060660&Body=Bonjour, voici votre code pour vous connecter sur deeel : ${codeGenerated}`,
    };
    console.log(init);
    fetch(url, init)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const generateCode = async () => {
      const code = await Math.round(Math.random() * 10000);
      await axios({
        method: "get",
        url: `https://deeel-v0-test.onrender.com/api/user/${uid}`,
      })
        .then((res) => {
          if (res.data.twoFA != true) {
            sendCode(code, res.data.phone_number);
            setCodeGenerated(code);
          }
        })
        .catch((err) => console.log(err));
    };

    if ((userData.isVerified = true)) {
      setLoading(false);
      generateCode();
    }
  }, [uid]);

  return (
    <>
      {loading ? (
        <>
          Chargement... <i className="fas fa-spinner fa-spin"></i>
        </>
      ) : !isVerified ? (
        <div className="twoFA-container">
          <img src="/exclamation.svg" alt="warning" />
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
          {/* <div className="resend-container">
              <p>Renvoyer le SMS</p>
            </div> */}
          <div className="logout">
            <Logout />
          </div>
        </div>
      ) : (
        <div className="twoFA-container">
          <img src="/succes.svg" alt="success" />
          <h3>
            Votre identité est confirmée, vous pouvez poursuivre en toute
            sécurité.
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
