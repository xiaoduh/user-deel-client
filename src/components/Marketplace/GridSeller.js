import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { dateParser, upperCase } from "../../utils";
import PopupEdit from "./PopupEdit";

const GridSeller = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  //recuperation des data a modifier ou supp
  const [contactToEdit, setContactToEdit] = useState(null);

  useEffect(() => leadsData[0] && setIsLoading(false));

  const closePopupEdit = () => {
    setEdit(false);
  };

  const handleEditContact = (contact) => {
    setContactToEdit(contact);
    setEdit(true);
  };

  return (
    <main>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin loading"></i>
      ) : (
        <>
          <div className="table-grid">
            <div className="title-container">
              <h3>Mes annonces d'apports d'affaire en ligne</h3>
              <p>Ici, gérez vos annonces en ligne sur la place de marché.</p>
            </div>
            <table style={{ marginTop: "2rem" }}>
              <thead>
                <tr>
                  <th className="disable">Id</th>
                  <th className="needs">Profil recherché</th>
                  <th className="sector">Entreprise</th>
                  <th>Localité</th>
                  <th>Compétences</th>
                  <th>Desc.</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Rôle</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Ajouté le</th>
                  <th>Etat</th>
                  <th>Gain(s)</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {userData.nb_lead > 0 ? (
                  Array.isArray(leadsData) &&
                  leadsData.map((contact) => {
                    if (userData.isAdmin) {
                      return (
                        <tr contact={contact} key={contact._id}>
                          {" "}
                          <td>
                            {contact._id &&
                              contact._id.slice(
                                contact._id.length - 4,
                                contact._id.length
                              )}
                          </td>
                          <td>
                            {contact.lookingFor
                              ? upperCase(contact.lookingFor)
                              : "-"}
                          </td>
                          <td>
                            {contact.company ? upperCase(contact.company) : "-"}
                          </td>
                          <td>{contact.region ? contact.region : "-"}</td>
                          <td>
                            {contact.skills ? upperCase(contact.skills) : "-"}
                          </td>
                          <td style={{ maxWidth: "300px" }}>
                            {contact.desc ? upperCase(contact.desc) : "-"}
                          </td>
                          <td>
                            {contact.last_name
                              ? upperCase(contact.last_name)
                              : "-"}
                          </td>
                          <td>
                            {contact.first_name
                              ? upperCase(contact.first_name)
                              : "-"}
                          </td>
                          <td>
                            {contact.role ? upperCase(contact.role) : "-"}
                          </td>
                          <td>{contact.email ? contact.email : "-"}</td>
                          <td>{contact.phone ? contact.phone : "-"}</td>
                          <td>{dateParser(contact.createdAt)}</td>
                          <td>
                            {contact.status === "pending" ? (
                              <span style={{ color: "#F7685B" }}>
                                {contact.status}
                              </span>
                            ) : (
                              <span style={{ color: "#2ED47A" }}>
                                {contact.status}
                              </span>
                            )}
                          </td>
                          <td className="center">
                            {contact.buyer?.length > 0 ? (
                              <>
                                <span style={{ color: "#2ED47A" }}>
                                  {contact.buyer?.length}
                                </span>{" "}
                                <p> Crédit(s)</p>
                              </>
                            ) : (
                              <>
                                <p>
                                  <span style={{ color: "#F7685B" }}>
                                    {contact.buyer?.length}{" "}
                                  </span>{" "}
                                  Crédit
                                </p>
                              </>
                            )}
                          </td>
                          <td className="edit">
                            {!edit ? (
                              <button
                                onClick={() => handleEditContact(contact)}
                              >
                                Modifier
                              </button>
                            ) : null}
                            {/* {contact.status === "validated" ? (
                              <button
                                className="btn-cancel"
                                onClick={() => handleDisableContact(contact)}
                              >
                                Désactiver
                              </button>
                            ) : contact.status !== "pending" ? (
                              <button
                                className="btn-confirm"
                                onClick={() => handleDisableContact(contact)}
                              >
                                Activer
                              </button>
                            ) : null} */}
                          </td>
                        </tr>
                      );
                    } else if (userData._id === contact.dealerID) {
                      return (
                        <tr contact={contact} key={contact._id}>
                          {" "}
                          <td>
                            {contact._id &&
                              contact._id.slice(
                                contact._id.length - 4,
                                contact._id.length
                              )}
                          </td>
                          <td>
                            {contact.lookingFor
                              ? upperCase(contact.lookingFor)
                              : "-"}
                          </td>
                          <td>
                            {contact.company ? upperCase(contact.company) : "-"}
                          </td>
                          <td>{contact.region ? contact.region : "-"}</td>
                          <td>
                            {contact.skills ? upperCase(contact.skills) : "-"}
                          </td>
                          <td style={{ maxWidth: "300px" }}>
                            {contact.desc ? upperCase(contact.desc) : "-"}
                          </td>
                          <td>
                            {contact.last_name
                              ? upperCase(contact.last_name)
                              : "-"}
                          </td>
                          <td>
                            {contact.first_name
                              ? upperCase(contact.first_name)
                              : "-"}
                          </td>
                          <td>
                            {contact.role ? upperCase(contact.role) : "-"}
                          </td>
                          <td>{contact.email ? contact.email : "-"}</td>
                          <td>{contact.phone ? contact.phone : "-"}</td>
                          <td>{dateParser(contact.createdAt)}</td>
                          <td>{contact.status}</td>
                          <td className="center">
                            {contact.buyer?.length > 0 ? (
                              <>
                                <span style={{ color: "#2ED47A" }}>
                                  {contact.buyer?.length}
                                </span>{" "}
                                <p> Crédit(s)</p>
                              </>
                            ) : (
                              <>
                                <p>
                                  <span style={{ color: "#F7685B" }}>
                                    {contact.buyer?.length}{" "}
                                  </span>{" "}
                                  Crédit
                                </p>
                              </>
                            )}
                          </td>
                          <td className="edit">
                            {!edit ? (
                              <button
                                onClick={() => handleEditContact(contact)}
                              >
                                Modifier
                              </button>
                            ) : null}
                            {contact.status === "validated" ? (
                              <button className="btn-cancel">Désactiver</button>
                            ) : contact.status !== "pending" ? (
                              <button className="btn-confirm">Activer</button>
                            ) : null}
                          </td>
                        </tr>
                      );
                    } else return null;
                  })
                ) : (
                  <div className="popup-empty-list">
                    <h3>
                      Vous avez 0 annonce d'apport d'affaires en ligne sur la
                      plateforme.
                    </h3>
                    <p>
                      Pour déposer une annonce d'apport d'affaire RDV sur
                      l'onglet « Apporter une affaire ».
                    </p>
                    <NavLink to="/lead">
                      {" "}
                      <button>Publier une affaire</button>
                    </NavLink>
                  </div>
                )}
              </tbody>
            </table>
            {edit ? (
              <PopupEdit
                closePopupEdit={closePopupEdit}
                contactToEdit={contactToEdit}
              />
            ) : null}
          </div>
        </>
      )}
    </main>
  );
};

export default GridSeller;
