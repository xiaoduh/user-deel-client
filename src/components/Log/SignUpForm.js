import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [myType, setMyType] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const checkUserType = (e) => {
    setMyType(e.target.value);
    const errorUTRequired = document.querySelector(".utype");
    if (!e.target.value || e.target.value === null)
      errorUTRequired.style.border = "1px solid #F7685B";
    else errorUTRequired.style.border = "1px solid #2ED47A";
  };

  const checkPseudo = (e) => {
    setPseudo(e.target.value);
    const errorPseudoRequired = document.querySelector(".pseudo");
    if (!e.target.value || e.target.value === null)
      errorPseudoRequired.style.border = "1px solid #F7685B";
    else errorPseudoRequired.style.border = "1px solid #2ED47A";
  };

  const checkPhone = (e) => {
    setPhone_number(e.target.value.replace("0", "+33"));
    const errorPhoneRequired = document.querySelector(".phone");
    if (!e.target.value || e.target.value === null)
      errorPhoneRequired.style.border = "1px solid #F7685B";
    else errorPhoneRequired.style.border = "1px solid #2ED47A";
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

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    const terms = document.getElementById("terms");
    const typeError = document.querySelector(".type.error");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const telError = document.querySelector(".tel.error");
    const passwordError = document.querySelector(".password.error");
    const termsError = document.querySelector(".terms.error");
    const register = document.getElementById("register");
    const login = document.getElementById("login");

    // termsError.innerHTML = "";
    await axios({
      method: "post",
      url: `http://localhost:5000/api/user/register`,
      data: {
        user_type: myType,
        pseudo: pseudo,
        email: email,
        phone_number: phone_number,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          setLoading(false);
          typeError.innerHTML = res.data.errors.type;
          pseudoError.innerHTML = res.data.errors.pseudo;
          emailError.innerHTML = res.data.errors.email;
          telError.innerHTML = res.data.errors.phone_number;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          setFormSubmit(true);
          setLoading(false);
          // register.classList.remove("active-btn");
          // login.classList.add("active-btn");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {formSubmit ? (
        <>
          {" "}
          <div
            className="register-confirmation"
            style={{ alignItems: "center", marginBottom: "1rem" }}
          >
            <img
              src="./verified.svg"
              alt="register-completed"
              style={{ width: "60px" }}
            />
            <div className="register-confirmation-content">
              <h4>Compte créé !</h4>
            </div>
          </div>
        </>
      ) : (
        <form
          action=""
          onSubmit={handleRegister}
          id="sign-up-form"
          style={{ marginBottom: "1rem" }}
        >
          <div className="title-connexion">
            <h2>Créer un compte 📝</h2>
          </div>
          <br />
          <div className="input">
            <label htmlFor="type" class="form__label">
              Type d'utilisateur
            </label>
            <select
              class="form__field utype"
              type="select"
              name="type"
              id="type"
              autocomplete="off"
              required
              value={myType}
              onChange={(e) => checkUserType(e)}
            >
              {!myType && <option value="">Choisissez votre type</option>}
              <option value="sales">Commercial 👨🏽‍💼</option>
              <option value="business_provider">Informateur 🕵🏽‍♂️</option>
            </select>
            <div className="type error"></div>
          </div>
          <div className="input">
            <label htmlFor="pseudo" class="form__label">
              Pseudo
            </label>
            <input
              class="form__field name"
              type="text"
              name="pseudo"
              id="pseudo"
              autocomplete="off"
              required
              placeholder="Choisissez votre pseudo"
              onChange={(e) => checkPseudo(e)}
              value={pseudo}
            />
            <div className="nom error"></div>
          </div>
          <div className="input">
            <label htmlFor="tel" class="form__label">
              Téléphone
            </label>
            <input
              class="form__field phone"
              type="text"
              name="tel"
              id="tel"
              autocomplete="off"
              required
              placeholder="Renseignez votre numéro"
              onChange={(e) => checkPhone(e)}
              value={phone_number}
            />
            <div className="tel error"></div>
          </div>
          <div className="input">
            <label htmlFor="email" class="form__label">
              Email
            </label>
            <input
              class="form__field email"
              type="text"
              name="email"
              id="email"
              autocomplete="off"
              required
              placeholder="Renseignez votre email"
              onChange={(e) => checkEmail(e)}
              value={email}
            />
            <div className="email error"></div>
          </div>
          <div className="input">
            <label htmlFor="password" class="form__label">
              Mot de passe
            </label>
            <input
              class="form__field pw"
              type="password"
              name="password"
              id="password"
              autocomplete="off"
              placeholder="********"
              required
              onChange={(e) => checkPW(e)}
              value={password}
            />
            <div className="password error"></div>
          </div>
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
            <button type="submit" style={{ marginTop: "1rem" }}>
              {" "}
              {loading ? (
                <>
                  Chargement... <i className="fas fa-spinner fa-spin"></i>
                </>
              ) : (
                <p>Créer mon compte</p>
              )}{" "}
            </button>
          </>
        </form>
      )}
    </>
  );
};

export default SignUp;
