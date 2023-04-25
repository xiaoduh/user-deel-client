import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import Lead from "./Lead";
import { getLeads } from "../../actions/leads.actions";
import PopupInfo from "./PopupInfo";
import PopupReliability from "./PopupReliability";
import PopupReview from "./PopupReview";
import { getAllUsers } from "../../actions/users.actions";

const Grid = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [popupInfo, setPopupInfo] = useState(false);
  const [infoReliability, setInfoReliability] = useState(false);
  const [infoReview, setInfoReview] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getLeads());
      dispatch(getAllUsers());
      if (!isEmpty(leadsData) && !isEmpty(userData) && !isEmpty(usersData)) {
        setIsLoading(false);
      }
    }
  }, [isLoading]);

  const closePopupInfo = () => {
    setPopupInfo(false);
  };

  const closePopupReliability = () => {
    setInfoReliability(false);
  };

  const closePopupReview = () => {
    setInfoReview(false);
  };

  return (
    <main>
      <div className="table-grid">
        <div className="title-container">
          <h3>
            Annonces d'apports d'affaires
            <span style={{ color: "#109CF1" }}> ({leadsData.length})</span>
          </h3>
        </div>
        {isLoading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <table>
            <thead>
              <tr>
                <th className="disable">Id</th>
                <th className="needs">Besoin</th>
                <th className="sector">Secteur</th>
                <th className="sector">Lieu</th>
                <th>Société</th>
                <th>
                  Demandeur
                  {/* <img
                  src="/info.svg"
                  alt="info"
                  onClick={() => setPopupInfo(true)}
                /> */}
                </th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Statut</th>
                <th className="disable">Ajouté le</th>
                <th>Nombre de vue</th>
                <th>
                  Fiabilité{" "}
                  <img
                    src="/information.svg"
                    alt="info"
                    onMouseOver={() => setInfoReliability(true)}
                  />
                </th>
                <th>
                  Note globale de l'apporteur d'affaires{" "}
                  <img
                    src="/information.svg"
                    alt="info"
                    onMouseOver={() => setInfoReview(true)}
                  />
                </th>
                {/* <th className="disable">Dernière MAJ</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!isEmpty(leadsData[0]) &&
                leadsData.map((lead) => {
                  return (
                    <Lead
                      lead={lead}
                      user={userData}
                      users={usersData}
                      key={lead}
                    />
                  );
                })}
            </tbody>
          </table>
        )}
        {popupInfo ? <PopupInfo closePopupInfo={closePopupInfo} /> : null}
        {infoReliability ? (
          <PopupReliability closePopupReliability={closePopupReliability} />
        ) : null}
        {infoReview ? (
          <PopupReview closePopupReview={closePopupReview} />
        ) : null}
      </div>
    </main>
  );
};

export default Grid;
