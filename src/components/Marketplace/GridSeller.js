import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, upperCase, isEmpty } from "../../utils";
import PopupEdit from "./PopupEdit";

const GridSeller = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  //recuperation des data a modifier ou supp
  const [contactToEdit, setContactToEdit] = useState(null);

  useEffect(() => {
    leadsData[0] && setIsLoading(false);
  }, [isLoading, leadsData]);

  const closePopupEdit = () => {
    setEdit(false);
  };

  const handleEditContact = (contact) => {
    setContactToEdit(contact);
    setEdit(true);
  };

  return (
    <main>
      <div className="title-container">
        <h3>Mes annonces d'apports d'affaire en ligne</h3>
        <p>Ici, gérez vos annonces en ligne sur la place de marché.</p>
      </div>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin loading"></i>
      ) : (
        <div className="grid-container seller">
          {!isEmpty(leadsData[0]) &&
            leadsData.map((lead) => {
              if (userData.isAdmin) {
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
                            {lead._id.slice(
                              lead._id.length - 4,
                              lead._id.length
                            )}
                          </small>
                          <div className="title">
                            <h3 className="needs">
                              👨‍💻 {upperCase(lead.lookingFor)}
                            </h3>{" "}
                            <small>
                              Ajouté le {dateParser(lead.createdAt)}
                            </small>
                          </div>
                          <div className="skill">
                            <h5>✅ Compétences recherchées :</h5>
                            <p>{lead?.skills?.slice(0, 140)}</p>
                          </div>
                          <div className="localisation">
                            <h5>📍 Localisation : </h5>
                            <p
                              style={{
                                display: "inline-block",
                                margin: "0 auto",
                              }}
                            >
                              {lead.region}
                            </p>
                          </div>
                          <div className="info-container">
                            <div className="title-information-container">
                              <h5>
                                🕵️‍♂️ Informations détenues par l'apporteur
                                d'affaire :
                              </h5>
                            </div>
                            <div className="grid-icon">
                              <div className="icon-container">
                                {lead.company !== "" ? (
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
                                <p>{lead.company ? lead.company : "-"}</p>
                              </div>
                            </div>
                            <div className="grid-icon">
                              <div className="icon-container">
                                {lead.first_name && lead.last_name !== "" ? (
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
                                  {lead.first_name ? lead.first_name : "-"}{" "}
                                  {lead.last_name ? lead.last_name : "-"}
                                </p>
                              </div>
                            </div>
                            <div className="grid-icon">
                              <div className="icon-container">
                                {lead.email !== "" ? (
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
                                <p>{lead.email ? lead.email : "-"}</p>
                              </div>
                            </div>
                            <div className="grid-icon">
                              <div className="icon-container">
                                {lead.phone !== "" ? (
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
                                <p>{lead.phone ? lead.phone : "-"}</p>
                              </div>
                            </div>
                            <div className="grid-icon">
                              <div className="icon-container">
                                {lead.desc !== "" && lead.desc ? (
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
                                <p>{lead.desc ? lead.desc : "-"}</p>
                              </div>
                            </div>
                          </div>
                          {!edit ? (
                            <button onClick={() => handleEditContact(lead)}>
                              Modifier
                            </button>
                          ) : null}
                        </>
                      )}
                    </div>
                  </div>
                );
              } else if (userData._id === lead.dealerID) {
                return (
                  <>
                    <small className="disable">
                      ref:{" "}
                      {lead._id.slice(lead._id.length - 4, lead._id.length)}
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
                      <p
                        style={{
                          display: "inline-block",
                          margin: "0 auto",
                        }}
                      >
                        {lead.region}
                      </p>
                    </div>
                    <div className="info-container">
                      <div className="title-information-container">
                        <h5>
                          🕵️‍♂️ Informations détenues par l'apporteur d'affaire :
                        </h5>
                      </div>
                      <div className="grid-icon">
                        <div className="icon-container">
                          {lead.company !== "" ? (
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
                          <p>Entreprise</p>
                        </div>
                      </div>
                      <div className="grid-icon">
                        <div className="icon-container">
                          {lead.first_name && lead.last_name !== "" ? (
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
                          <p>Demandeur</p>
                        </div>
                      </div>
                      <div className="grid-icon">
                        <div className="icon-container">
                          {lead.email !== "" ? (
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
                          <p>Email</p>
                        </div>
                      </div>
                      <div className="grid-icon">
                        <div className="icon-container">
                          {lead.phone !== "" ? (
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
                          <p>Téléphone</p>
                        </div>
                      </div>
                      <div className="grid-icon">
                        <div className="icon-container">
                          {lead.desc !== "" && lead.desc ? (
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
                          <p>Fiche de poste</p>
                        </div>
                      </div>
                    </div>
                    {!edit ? (
                      <button onClick={() => handleEditContact(lead)}>
                        Modifier
                      </button>
                    ) : null}
                  </>
                );
              } else return null;
            })}
        </div>
      )}
      {edit ? (
        <PopupEdit
          closePopupEdit={closePopupEdit}
          contactToEdit={contactToEdit}
        />
      ) : null}
    </main>
  );
};

export default GridSeller;
