import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { isEmpty } from "../../utils";

const SignUp = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [myType, setMyType] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const leadsData = useSelector((state) => state.leadsReducer);

  const checkUserType = (e) => {
    setMyType(e.target.value);
    const errorUTRequired = document.querySelector(".utype");
    if (!e.target.value || e.target.value === null)
      errorUTRequired.style.border = "1px solid #F7685B";
    else errorUTRequired.style.border = "1px solid #2ED47A";
  };

  const checkLastName = (e) => {
    setLast_name(e.target.value);
    const errorLastNameRequired = document.querySelector(".name");
    if (!e.target.value || e.target.value === null)
      errorLastNameRequired.style.border = "1px solid #F7685B";
    else errorLastNameRequired.style.border = "1px solid #2ED47A";
  };

  const checkFirstName = (e) => {
    setFirst_name(e.target.value);
    const errorFirstNameRequired = document.querySelector(".firstname");
    if (!e.target.value || e.target.value === null)
      errorFirstNameRequired.style.border = "1px solid #F7685B";
    else errorFirstNameRequired.style.border = "1px solid #2ED47A";
  };

  const checkPhone = (e) => {
    setPhone_number(e.target.value.trim().replace("0", "+33"));
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
    const nomError = document.querySelector(".nom.error");
    const prenomError = document.querySelector(".prenom.error");
    const emailError = document.querySelector(".email.error");
    const telError = document.querySelector(".tel.error");
    const passwordError = document.querySelector(".password.error");
    const termsError = document.querySelector(".terms.error");
    const register = document.getElementById("register");
    const login = document.getElementById("login");

    // termsError.innerHTML = "";
    await axios({
      method: "post",
      url: `https://deeel-v0-test.onrender.com/api/user/register`,
      data: {
        user_type: myType,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          setLoading(false);
          // typeError.innerHTML = res.data.errors.type;
          nomError.innerHTML = res.data.errors.last_name;
          prenomError.innerHTML = res.data.errors.first_name;
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
            <img style={{ marginBottom: "0" }} src="./logo.png" alt="logo" />
            <p style={{ marginBottom: "1.5rem" }}>
              Il y a actuellement{" "}
              <span>{!isEmpty(leadsData) && leadsData.length}</span> annonces
              d'apports d'affaires en ligne.
            </p>
            <h2>Inscription</h2>
          </div>
          <br />
          <label htmlFor="type" class="form__label">
            Type d'utilisateur
          </label>
          <br />
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
            <option value="sales">Commercial</option>
            <option value="business_provider">Apporteur d'affaires</option>
          </select>
          <div className="type error"></div>
          <br />
          <label htmlFor="nom" class="form__label">
            Nom
          </label>
          <br />
          <input
            class="form__field name"
            type="text"
            name="nom"
            id="nom"
            autocomplete="off"
            required
            placeholder="Duff"
            onChange={(e) => checkLastName(e)}
            value={last_name}
          />
          <div className="nom error"></div>
          <br />
          <label htmlFor="prenom" class="form__label">
            Prénom
          </label>
          <br />
          <input
            class="form__field firstname"
            type="text"
            name="prenom"
            id="prenom"
            autocomplete="off"
            required
            placeholder="John"
            onChange={(e) => checkFirstName(e)}
            value={first_name}
          />
          <div className="prenom error"></div>
          <br />
          <label htmlFor="tel" class="form__label">
            Téléphone
          </label>
          <br />
          <input
            class="form__field phone"
            type="text"
            name="tel"
            id="tel"
            autocomplete="off"
            required
            placeholder="Un code vous sera envoyé à chaque connexion"
            onChange={(e) => checkPhone(e)}
            value={phone_number}
          />
          <div className="tel error"></div>
          <br />
          <label htmlFor="email" class="form__label">
            Email
          </label>
          <br />
          <input
            class="form__field email"
            type="text"
            name="email"
            id="email"
            autocomplete="off"
            required
            placeholder="doit être vérifié pour activer votre compte"
            onChange={(e) => checkEmail(e)}
            value={email}
          />
          <div className="email error"></div>
          <br />
          <label htmlFor="password" class="form__label">
            Mot de passe
          </label>
          <br />
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
          <br />
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
