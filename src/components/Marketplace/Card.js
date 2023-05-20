import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { dateParser, isEmpty, upperCase } from "../../utils";
import { NavLink } from "react-router-dom";

const Card = ({ lead, user }) => {
  const [unlock, setUnlock] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    lead && setIsLoading(false);
  }, [isLoading]);

  const closePopup = () => {
    setIsLoading(true);
    setUnlock(!unlock);
  };
  return (
    <div className="card-container">
      <div className="inner">
        {lead.provider !== "esn" ? (
          <span class="pricing">
            <span>
              <span
                style={{
                  color: "#2ED47A",
                  fontWeight: "bold",
                  display: "block",
                  margin: "0 auto",
                }}
              >
                Client final
              </span>
            </span>
          </span>
        ) : (
          <span class="pricing" style={{ backgroundColor: "#ffb84652" }}>
            <span>
              <span
                style={{
                  color: "#FFB946",
                  fontWeight: "bold",
                  display: "block",
                  margin: "0 auto",
                }}
              >
                Sous-traitant
              </span>
            </span>
          </span>
        )}

        {isLoading ? (
          <>
            Chargement... <i className="fas fa-spinner fa-spin"></i>
          </>
        ) : (
          <>
            <small className="disable">
              ref: {lead._id.slice(lead._id.length - 4, lead._id.length)}
            </small>
            <div className="title">
              <h3 className="needs">👨‍💻 {upperCase(lead.lookingFor)}</h3>{" "}
              <small>Ajouté le {dateParser(lead.createdAt)}</small>
            </div>
            <div className="skill">
              <h5>✅ Compétences recherchées :</h5>
              <p>{lead?.skills?.slice(0, 140)}</p>
            </div>
            <div className="localisation">
              <h5>📍 Localisation : </h5>
              <p style={{ display: "inline-block", margin: "0 auto" }}>
                {lead.region}
              </p>
            </div>
            <div className="info-container">
              <div className="title-information-container">
                <h5>🕵️‍♂️ Informations détenues par l'apporteur d'affaire :</h5>
              </div>
              <div className="grid-icon">
                <div className="icon-container">
                  {lead.company !== "" ? (
                    <img
                      src="./known.svg"
                      alt="known"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  ) : (
                    <img
                      src="./unknown.svg"
                      alt="unknown"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  )}{" "}
                  <p>Entreprise</p>
                </div>
              </div>
              <div className="grid-icon">
                <div className="icon-container">
                  {lead.first_name && lead.last_name !== "" ? (
                    <img
                      src="./known.svg"
                      alt="known"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  ) : (
                    <img
                      src="./unknown.svg"
                      alt="unknown"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  )}{" "}
                  <p>Demandeur</p>
                </div>
              </div>
              <div className="grid-icon">
                <div className="icon-container">
                  {lead.email !== "" ? (
                    <img
                      src="./known.svg"
                      alt="known"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  ) : (
                    <img
                      src="./unknown.svg"
                      alt="unknown"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  )}{" "}
                  <p>Email</p>
                </div>
              </div>
              <div className="grid-icon">
                <div className="icon-container">
                  {lead.phone !== "" ? (
                    <img
                      src="./known.svg"
                      alt="known"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  ) : (
                    <img
                      src="./unknown.svg"
                      alt="unknown"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  )}{" "}
                  <p>Téléphone</p>
                </div>
              </div>
              <div className="grid-icon">
                <div className="icon-container">
                  {lead.desc !== "" && lead.desc ? (
                    <img
                      src="./known.svg"
                      alt="known"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  ) : (
                    <img
                      src="./unknown.svg"
                      alt="unknown"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  )}{" "}
                  <p>Fiche de poste</p>
                </div>
              </div>

              <div className="price-container">
                <div className="title-information-container">
                  <h5>🥇 Soyez le seul à obtenir les infos pour :</h5>
                </div>
                {lead.provider == "esn" ? (
                  <>
                    <p>
                      4,90 <span>€</span>
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      19,90 <span>€</span>
                    </p>
                  </>
                )}
              </div>
            </div>

            {user?.lead_bought?.find((el) => el === lead._id) ? (
              <NavLink to="/conversation">
                <button className="btn-confirm">Voir les informations</button>
              </NavLink>
            ) : lead.buyer.length < 1 ? (
              <button onClick={() => closePopup()}>
                Obtenir en exclusivité les informations
              </button>
            ) : (
              <button className="btn-not-allowed">Vendu</button>
            )}
            <small
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Après vous, personne n'aura accès aux infos.
            </small>
          </>
        )}
      </div>

      {unlock ? <Popup lead={lead} closePopup={closePopup} /> : null}
    </div>
  );
};

export default Card;
