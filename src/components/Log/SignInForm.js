import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [emailToReset, setEmailToReset] = useState("");
  const [loading, setLoading] = useState(false);

  const checkEmail2Reset = (e) => {
    setEmailToReset(e.target.value);
    const errorEmail2ResetRequired = document.querySelector(".email2reset");
    if (!e.target.value || e.target.value === null)
      errorEmail2ResetRequired.style.border = "1px solid #F7685B";
    else errorEmail2ResetRequired.style.border = "1px solid #2ED47A";
  };

  const checkEmail = (e) => {
    setEmail(e.target.value);
    const errorEmailRequired = document.querySelector(".email");
    if (!e.target.value || e.target.value === null)
      errorEmailRequired.style.border = "1px solid #F7685B";
    else errorEmailRequired.style.border = "1px solid #2ED47A";
  };

  const checkPW = (e) => {
    setPassword(e.target.value);
    const errorPWRequired = document.querySelector(".pw");
    if (!e.target.value || e.target.value === null)
      errorPWRequired.style.border = "1px solid #F7685B";
    else errorPWRequired.style.border = "1px solid #2ED47A";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `https://deeel-v0-test.onrender.com/api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
          setLoading(false);
        } else {
          setLoading(false);
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = emailToReset;
    const emailError = document.querySelector(".email.error");
    const emailSuccess = document.querySelector(".email.success");

    console.log(email);
    axios({
      method: "post",
      url: `https://deeel-v0-test.onrender.com/api/user/user-forgot-password/`,
      withCredentials: true,
      data: {
        email,
      },
    })
      .then((res) => {
        setLoading(false);
        emailSuccess.innerHTML = res.data;
        setTimeout(() => {
          emailSuccess.innerHTML = "";
        }, 5000);
      })
      .catch((err) => {
        if (err.response.data) emailError.innerHTML = err.response.data;
        setLoading(false);
        setTimeout(() => {
          emailError.innerHTML = "";
        }, 5000);
      });
  };

  return (
    <>
      {resetPassword ? (
        <>
          <form onSubmit={handleResetPassword} id="reset-password-form">
            <div className="title-connexion">
              <h2>Mot de passe oublié 🧠</h2>
            </div>
            <div
              className="input"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="email" id="email" class="form__label">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => checkEmail2Reset(e)}
                value={emailToReset}
                class="form__field email2reset"
              />
              <div className="email error"></div>
              <div className="email success"></div>
            </div>
            <>
              <button type="submit" style={{ marginTop: "1rem" }}>
                {" "}
                {loading ? (
                  <>
                    Chargement... <i className="fas fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <p>Demander un nouveau mot de passe</p>
                )}{" "}
              </button>
            </>
          </form>
          <div className="reset-password">
            <p onClick={() => setResetPassword(!resetPassword)}>Retour</p>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="title-connexion">
            <h2>Connexion 🔓</h2>
          </div>
          <form onSubmit={handleLogin} id="sign-up-form">
            <div className="input">
              <label htmlFor="email" class="form__label">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => checkEmail(e)}
                value={email}
                class="form__field email"
              />
              <div className="email error"></div>
            </div>
            <div className="input">
              <label htmlFor="password" class="form__label">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => checkPW(e)}
                value={password}
                class="form__field pw"
              />
              <div className="password error"></div>
            </div>
            <>
              <button type="submit" style={{ marginTop: "1rem" }}>
                {" "}
                {loading ? (
                  <>
                    Chargement... <i className="fas fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <p>Se connecter</p>
                )}{" "}
              </button>
            </>
          </form>
          <div className="reset-password">
            <p onClick={() => setResetPassword(!resetPassword)}>
              Mot de passe oublié
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default SignIn;
