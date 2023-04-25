import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { dateParser, upperCase } from "../../utils";
import { getLeads } from "../../actions/leads.actions";
import PopupEdit from "./PopupEdit";

const GridSeller = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  //recuperation des data a modifier
  const [contactToEdit, setContactToEdit] = useState(null);

  console.log(Array.isArray(leadsData), leadsData);

  useEffect(() => {
    if (isLoading) {
      dispatch(getLeads());
      leadsData && setIsLoading(false);
    }
  }, []);

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
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="table-grid">
            <div className="title-container">
              <h3>Mes annonces d'apports d'affaire en ligne</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th className="disable">Id</th>
                  <th className="needs">Profil recherché</th>
                  <th className="sector">Entreprise</th>
                  <th className="sector">Secteur</th>
                  <th>Département</th>
                  <th>Compétences</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Rôle</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Ajouté le</th>
                  <th>Gain(s)</th>
                  <th>Modifier</th>
                </tr>
              </thead>

              <tbody>
                {userData.nb_lead > 0 ? (
                  Array.isArray(leadsData) &&
                  leadsData.map((contact) => {
                    if (userData._id === contact.dealerID) {
                      return (
                        <tr contact={contact} key={contact._id}>
                          {" "}
                          <td>
                            {contact._id.slice(
                              contact._id.length - 4,
                              contact._id.length
                            )}
                          </td>
                          <td>
                            {contact.lookingFor &&
                              upperCase(contact.lookingFor)}
                          </td>
                          <td>
                            {contact.company && upperCase(contact.company)}
                          </td>
                          <td>{contact.sector && upperCase(contact.sector)}</td>
                          <td>{contact.region}</td>
                          <td>{contact.skills && upperCase(contact.skills)}</td>
                          <td>
                            {contact.last_name && upperCase(contact.last_name)}
                          </td>
                          <td>
                            {contact.first_name &&
                              upperCase(contact.first_name)}
                          </td>
                          <td>
                            {contact.position && upperCase(contact.position)}
                          </td>
                          <td>{contact.email}</td>
                          <td>{contact.phone}</td>
                          <td>{dateParser(contact.createdAt)}</td>
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
                          </td>
                        </tr>
                      );
                    }
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
