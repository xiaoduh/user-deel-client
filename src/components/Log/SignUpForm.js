import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [user_username, setUser_username] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    const terms = document.getElementById("terms");
    const pseudoError = document.querySelector(".identifiant.error");
    const nomError = document.querySelector(".nom.error");
    const prenomError = document.querySelector(".prenom.error");
    const emailError = document.querySelector(".email.error");
    const telError = document.querySelector(".tel.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");
    const register = document.getElementById("register");
    const login = document.getElementById("login");

    passwordConfirmError.innerHTML = "";
    // termsError.innerHTML = "";

    if (password !== controlPassword) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";

      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "post",
        url: `https://deeel-v0-test.onrender.com/api/user/register`,
        data: {
          user_username: user_username,
          first_name: first_name,
          last_name: last_name,
          email: email,
          phone_number: phone_number.replace("0", "+33"),
          password: password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            setLoading(false);
            pseudoError.innerHTML = res.data.errors.user_username;
            nomError.innerHTML = res.data.errors.last_name;
            prenomError.innerHTML = res.data.errors.first_name;
            emailError.innerHTML = res.data.errors.email;
            telError.innerHTML = res.data.errors.phone_number;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
            setLoading(false);
            register.classList.remove("active-btn");
            login.classList.add("active-btn");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          {" "}
          <div className="register-confirmation">
            <img src="./telegram.svg" alt="register-completed" />
            <div className="register-confirmation-content">
              <h4>
                Inscription bien{" "}
                <span className="success">prise en compte</span>. <br></br>
                <span className="success">Validez</span> votre Email pour vous
                connecter.
              </h4>
              <small>Pensez à vérifier vos spams.</small>
            </div>
          </div>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <div className="title-connexion">
            <img src="./logo.png" alt="logo" />
            <h2>Inscription</h2>
          </div>
          <label htmlFor="identifiant" class="form__label">
            Identifiant
          </label>
          <br />
          <input
            class="form__field"
            type="text"
            name="identifiant"
            id="identifiant"
            autocomplete="off"
            required
            placeholder="JohnDuff"
            onChange={(e) => setUser_username(e.target.value)}
            value={user_username}
          />
          <div className="identifiant error"></div>
          <br />
          <label htmlFor="nom" class="form__label">
            Nom
          </label>
          <br />
          <input
            class="form__field"
            type="text"
            name="nom"
            id="nom"
            autocomplete="off"
            required
            placeholder="Duff"
            onChange={(e) => setLast_name(e.target.value)}
            value={last_name}
          />
          <div className="nom error"></div>
          <br />
          <label htmlFor="prenom" class="form__label">
            Prénom
          </label>
          <br />
          <input
            class="form__field"
            type="text"
            name="prenom"
            id="prenom"
            autocomplete="off"
            required
            placeholder="John"
            onChange={(e) => setFirst_name(e.target.value)}
            value={first_name}
          />
          <div className="prenom error"></div>
          <br />
          <label htmlFor="tel" class="form__label">
            Téléphone
          </label>
          <br />
          <input
            class="form__field"
            type="text"
            name="tel"
            id="tel"
            autocomplete="off"
            required
            placeholder="doit être vérifié pour vous connecter"
            onChange={(e) => setPhone_number(e.target.value)}
            value={phone_number}
          />
          <div className="tel error"></div>
          <br />
          <label htmlFor="email" class="form__label">
            Email
          </label>
          <br />
          <input
            class="form__field"
            type="text"
            name="email"
            id="email"
            autocomplete="off"
            required
            placeholder="doit être vérifié pour activer votre compte"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          <br />
          <label htmlFor="password" class="form__label">
            Mot de passe
          </label>
          <br />
          <input
            class="form__field"
            type="password"
            name="password"
            id="password"
            autocomplete="off"
            placeholder="********"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          <br />
          <label htmlFor="password-conf" class="form__label">
            Confirmer le mot de passe
          </label>
          <br />
          <input
            class="form__field"
            type="password"
            name="password"
            id="password-conf"
            autocomplete="off"
            placeholder="********"
            required
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
          <br />
          {/* 
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              conditions générales
            </a>
          </label>
          <div className="terms error"></div>
          <br /> */}
          <>
            <button type="submit">
              {" "}
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                <p>S'inscrire</p>
              )}{" "}
            </button>
          </>
        </form>
      )}
    </>
  );
};

export default SignUp;
