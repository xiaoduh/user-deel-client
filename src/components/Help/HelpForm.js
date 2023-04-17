import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const HelpForm = ({ title, p, subject }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_cy23k6l",
        "template_mcdg53r",
        form.current,
        "lc75YbTtEFOZYWAAK"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setLoading(false);
          formMess.innerHTML = `<p class='success'>Demande ${subject} envoyée ! Nous vous recontactons dans les plus bref délais.</p>`;

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 6500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 6500);
        }
      );
  };

  return (
    <main>
      <div className="form-grid">
        <div className="title-container">
          <h3>
            Contacter le
            <span style={{ color: "#109CF1" }}> Support</span>
          </h3>
        </div>
        <div className="contact">
          <img src="/support.svg" alt="support" />
          <h3>{title}</h3>
          <p>{p}</p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="email"
              placeholder="Mon adresse email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              required
              placeholder="Votre message décrivant votre demande"
            ></textarea>
            <button type="submit">
              {" "}
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                <p>Envoyer</p>
              )}
            </button>
            <div className="form-message"></div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default HelpForm;
