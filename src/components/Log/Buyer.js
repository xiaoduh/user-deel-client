import React from "react";

const Buyer = ({ leadsData }) => {
  return (
    <div className="form-container">
      <div className="title-connexion">
        <h2 style={{ marginBottom: "1.5rem", lineHeight: "2rem" }}>
          Alimentez votre{" "}
          <span
            style={{
              background: "#34adf92d",
              padding: "10px",
              borderRadius: "10px",
              color: "#334D6E",
            }}
          >
            pipeline
          </span>{" "}
          de prospection avec des{" "}
          <span
            style={{
              background: "#34adf92d",
              padding: "10px",
              borderRadius: "10px",
              color: "#334D6E",
            }}
          >
            leads
          </span>{" "}
          et{" "}
          <span
            style={{
              background: "#34adf92d",
              padding: "10px",
              borderRadius: "10px",
              color: "#334D6E",
            }}
          >
            missions identifiés
          </span>
          <br></br> par des{" "}
          <span
            style={{
              background: "#34adf92d",
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
              Connectez-vous au plus grand réseau d'apporteurs d'affaires IT 🕵️‍♂️.
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
              Obtenez en exclusivité des informations sur les missions ouvertes
              à l'instant T 🎯.
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
              Discutez avec vos apporteurs d'affaires pour obtenir des
              informations supplémentaires sur les besoins 💬.
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
              Faites de la veille sur les tendances du marché pour guider vos
              activités de recrutement 🔎.
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Buyer;
