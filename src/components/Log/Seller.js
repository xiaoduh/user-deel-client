import React from "react";

const Seller = ({ leadsData }) => {
  return (
    <div className="form-container">
      <div className="title-connexion">
        <h2 style={{ marginBottom: "1.5rem", lineHeight: "2rem" }}>
          Valorisez votre{" "}
          <span
            style={{
              background: "#ffb84652",
              padding: "10px",
              borderRadius: "10px",
              color: "#334D6E",
            }}
          >
            réseau
          </span>{" "}
          et{" "}
          <span
            style={{
              background: "#ffb84652",
              padding: "10px",
              borderRadius: "10px",
              color: "#334D6E",
            }}
          >
            les informations
          </span>{" "}
          qui viennent à vous, en devenant{" "}
          <span
            style={{
              background: "#ffb84652",
              padding: "10px",
              borderRadius: "10px",
              color: "#334D6E",
            }}
          >
            apporteur d'affaires IT
          </span>
          .
        </h2>
        <ul style={{ flexDirection: "column" }}>
          <li
            style={{
              display: "flex",
              justifyContent: "left",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            <img
              src="./known.svg"
              alt="known"
              style={{ width: "24px", marginRight: "1rem" }}
            />{" "}
            <h3 style={{ textAlign: "left" }}>
              Valorisez votre réseau auprès d'acheteurs en quêtent
              d'informations sur un compte client 📈.
            </h3>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "left",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            <img
              src="./known.svg"
              alt="known"
              style={{ width: "24px", marginRight: "1rem" }}
            />{" "}
            <h3 style={{ textAlign: "left" }}>
              Revendez les missions qui ne vous intéressent pas et indiscrets,
              en tout anonymat 💰.
            </h3>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "left",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            <img
              src="./known.svg"
              alt="known"
              style={{ width: "24px", marginRight: "1rem" }}
            />{" "}
            <h3 style={{ textAlign: "left" }}>
              Réalisez des prises d'informations rémunérées pour vos acheteurs
              (entretiens, obtentions de fiche de poste...) 🕵️‍♂️.
            </h3>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "left",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            <img
              src="./known.svg"
              alt="known"
              style={{ width: "24px", marginRight: "1rem" }}
            />{" "}
            <h3 style={{ textAlign: "left" }}>
              Definissez la valeur de vos informations. Ajoutez-vous un revenu
              passif supplémentaire lucratif 🚀.
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Seller;
