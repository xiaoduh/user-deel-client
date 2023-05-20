import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { dateParser, upperCase } from "../../utils";

const TableLead = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    leadsData[0] && setIsLoading(false);
  }, [isLoading, leadsData]);

  return (
    <main>
      <div className="title-container">
        <h3>
          Mes
          <span style={{ color: "#109CF1" }}>
            {" "}
            infos business ({userData.lead_bought.length})
          </span>
        </h3>
      </div>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin loading"></i>
      ) : (
        <div className="grid-container">
          {userData.lead_bought.length > 0 ? (
            userData.lead_bought.map((contact) => {
              for (let i = 0; i < leadsData.length; i++) {
                if (contact === leadsData[i]._id) {
                  return (
                    <div className="card-container">
                      <div className="inner">
                        {leadsData[i].provider !== "esn" ? (
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
                          <span
                            class="pricing"
                            style={{ backgroundColor: "#ffb84652" }}
                          >
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
                            Chargement...{" "}
                            <i className="fas fa-spinner fa-spin"></i>
                          </>
                        ) : (
                          <>
                            <small className="disable">
                              ref:{" "}
                              {leadsData[i]._id.slice(
                                leadsData[i]._id.length - 4,
                                leadsData[i]._id.length
                              )}
                            </small>
                            <div className="title">
                              <h3 className="needs">
                                👨‍💻 {upperCase(leadsData[i].lookingFor)}
                              </h3>{" "}
                              <small>
                                Ajouté le {dateParser(leadsData[i].createdAt)}
                              </small>
                            </div>
                            <div className="skill">
                              <h5>✅ Compétences recherchées :</h5>
                              <p>{leadsData[i]?.skills?.slice(0, 140)}</p>
                            </div>
                            <div className="localisation">
                              <h5>📍 Localisation : </h5>
                              <p
                                style={{
                                  display: "inline-block",
                                  margin: "0 auto",
                                }}
                              >
                                {leadsData[i].region}
                              </p>
                            </div>
                            <div className="info-container">
                              <div className="title-information-container">
                                <h5>🕵️‍♂️ Informations sur le besoin :</h5>
                              </div>
                              <div className="grid-icon">
                                <div className="icon-container">
                                  {leadsData[i].company !== "" ? (
                                    <img
                                      src="./known.svg"
                                      alt="known"
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  ) : (
                                    <img
                                      src="./unknown.svg"
                                      alt="unknown"
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  )}{" "}
                                  <p>
                                    {leadsData[i].company
                                      ? leadsData[i].company
                                      : "-"}
                                  </p>
                                </div>
                              </div>
                              <div className="grid-icon">
                                <div className="icon-container">
                                  {leadsData[i].first_name &&
                                  leadsData[i].last_name !== "" ? (
                                    <img
                                      src="./known.svg"
                                      alt="known"
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  ) : (
                                    <img
                                      src="./unknown.svg"
                                      alt="unknown"
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  )}{" "}
                                  <p>
                                    {leadsData[i].first_name
                                      ? leadsData[i].first_name
                                      : "-"}{" "}
                                    {leadsData[i].last_name
                                      ? leadsData[i].last_name
                                      : "-"}
                                  </p>
                                </div>
                              </div>
                              <div className="grid-icon">
                                <div className="icon-container">
                                  {leadsData[i].email !== "" ? (
                                    <img
                                      src="./known.svg"
                                      alt="known"
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  ) : (
                                    <img
                                      src="./unknown.svg"
                                      alt="unknown"
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  )}{" "}
                                  <p>
                                    {leadsData[i].email
                                      ? leadsData[i].email
                                      : "-"}
                                  </p>
                                </div>
                              </div>
                              <div className="grid-icon">
                                <div className="icon-container">
                                  {leadsData[i].phone !== "" ? (
                                    <img
                                      src="./known.svg"
                                      alt="known"
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  ) : (
                                    <img
                                      src="./unknown.svg"
                                      alt="unknown"
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  )}{" "}
                                  <p>
                                    {leadsData[i].phone_number
                                      ? leadsData[i].phone_number
                                      : "-"}
                                  </p>
                                </div>
                              </div>
                              <div className="grid-icon">
                                <div className="icon-container">
                                  {leadsData[i].desc !== "" &&
                                  leadsData[i].desc ? (
                                    <img
                                      src="./known.svg"
                                      alt="known"
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  ) : (
                                    <img
                                      src="./unknown.svg"
                                      alt="unknown"
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  )}{" "}
                                  <p>
                                    {leadsData[i].desc
                                      ? leadsData[i].desc
                                      : "-"}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <NavLink to="/conversation">
                              <button className="btn-not-allowed">
                                Echanger avec l'apporteur d'affaire
                              </button>
                              <small
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                Fonctionnalité non disponible
                              </small>
                            </NavLink>
                          </>
                        )}
                      </div>
                    </div>
                  );
                }
              }
            })
          ) : (
            <div className="popup-empty-list">
              <h3>Votre liste de contact est vide</h3>
              <p>
                Pour ajouter des contacts à votre liste, rendez-vous sur la
                marketplace.
              </p>
              <NavLink to="/marketplace">
                {" "}
                <button>Ajouter des contacts</button>
              </NavLink>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default TableLead;
