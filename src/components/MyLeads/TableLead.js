import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isEmpty, dateParser } from "../../utils";
import PercentFiability from "../utils/PercentFiability";

const TableLead = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    !isEmpty(userData) && !isEmpty(leadsData) && setIsLoading(false);
  }, [userData, leadsData]);

  return (
    <main>
      {isLoading ? (
        "chargement"
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom et Prénom</th>
              <th>Position</th>
              <th>Email</th>
              <th>Entreprise</th>
              <th>Profil recherché</th>
              <th>Fiabilité</th>
              <th>Ajouté sur Deel le</th>
            </tr>
          </thead>
          <tbody>
            {userData.lead_bought.length > 0 ? (
              userData.lead_bought.map((contact) => {
                for (let i = 0; i < leadsData.length; i++) {
                  if (contact === leadsData[i]._id) {
                    return (
                      <tr contact={leadsData[i]} key={leadsData[i]._id}>
                        {" "}
                        <td>
                          {leadsData[i]._id.slice(
                            leadsData[i]._id.length - 4,
                            leadsData[i]._id.length
                          )}
                        </td>
                        <td>
                          {leadsData[i].first_name} {leadsData[i].last_name}
                        </td>
                        <td>{leadsData[i].role}</td>
                        <td>{leadsData[i].email}</td>
                        <td>{leadsData[i].company}</td>
                        <td>{leadsData[i].lookingFor}</td>
                        <td>
                          <PercentFiability
                            percent={Math.floor(Math.random() * 100)}
                          />
                        </td>
                        <td>{dateParser(leadsData[i].createdAt)}</td>
                      </tr>
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
          </tbody>
        </table>
      )}
    </main>
  );
};

export default TableLead;
