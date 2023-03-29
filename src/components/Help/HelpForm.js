import React from "react";

const HelpForm = () => {
  return (
    <div className="contact">
      <img src="/support.svg" />
      <h3>
        Vous faites face à des difficultés d'utilisation ou à un problème ?
      </h3>
      <p>
        Contactez-nous et nous prendre contacte avec vous dans les plus bref
        délais.
      </p>
      <form name="contact" method="post" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Nom</label>
        <input type="text" name="name" />
        <label for="email">Email</label>
        <input type="email" name="email" />
        <label for="message">Décrivez votre problème</label>
        <textarea name="message"></textarea>
        <button type="submit">Envoyer</button>
        <div className="sucess"></div>
      </form>
    </div>
  );
};

export default HelpForm;
