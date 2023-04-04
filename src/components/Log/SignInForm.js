import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [emailToReset, setEmailToReset] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `http://localhost:5000/api/user/login`,
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
        } else {
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
      url: `http://localhost:5000/api/user/user-forgot-password/`,
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
              <img src="./logo.png" alt="logo" />
              <h2>
                Mot de passe <span>oublié</span>
              </h2>
            </div>
            <label htmlFor="email" id="email" class="form__label">
              Email
            </label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmailToReset(e.target.value)}
              value={emailToReset}
              class="form__field"
            />
            <div className="email error"></div>
            <div className="email success"></div>
            <br />
            {loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <input type="submit" value="Demander un nouveau mot de passe" />
            )}
          </form>
          <div className="reset-password">
            <p onClick={() => setResetPassword(!resetPassword)}>Retour</p>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="title-connexion">
            <img src="./logo.png" alt="logo" />
            <h2>
              Connexion en tant que <span>utilisateur</span>.
            </h2>
          </div>
          <form onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="email" class="form__label">
              Email
            </label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              class="form__field"
            />
            <div className="email error"></div>
            <br />
            <label htmlFor="password" class="form__label">
              Mot de passe
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              class="form__field"
            />
            <div className="password error"></div>
            <br />
            {loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <input type="submit" value="Se connecter" />
            )}
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
