import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPW = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("nouveauPW");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(newPassword);

    const res = await axios({
      method: "put",
      url: `https://deeel-v0-test.onrender.com/api/user/user-reset-password/${id}/${token}`,
      data: { password: newPassword },
    });
    if (res.status === 200) {
      alert("Votre mot de passe a été modifié avec succès !");
      navigate("/");
    }
  };

  return (
    <div className="reset-password-container">
      <form id="reset-password-form" onSubmit={handleSubmit}>
        <div className="title-connexion">
          <h3>
            Entrez un <span>nouveau</span> mot de passe
          </h3>
        </div>
        <label htmlFor="password" id="password">
          Nouveau mot de passe
        </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Valider mon nouveau mot de passe" />
      </form>
    </div>
  );
};

export default ResetPW;
