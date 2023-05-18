import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import Lead from "./Lead";
import { getLeads } from "../../actions/leads.actions";
import PopupInfo from "./PopupInfo";
import PopupReliability from "./PopupReliability";
import PopupReview from "./PopupReview";
import { getAllUsers } from "../../actions/users.actions";
import Card from "./Card";

const Grid = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [popupInfo, setPopupInfo] = useState(false);
  const [infoReliability, setInfoReliability] = useState(false);
  const [infoReview, setInfoReview] = useState(false);
  const dispatch = useDispatch();

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
        <div className="title-container">
          <h3>
            Annonces d'apports d'affaires
            <span style={{ color: "#109CF1" }}> ({leadsData.length})</span>
          </h3>
          <p>
            Ici, entrez en relation avec les apporteurs d'affaires pour tout
            savoir sur les besoins qui vous intéressent.
          </p>
        </div>
        {!isLoading ? (
          <i className="fas fa-spinner fa-spin loading"></i>
        ) : (
          <div className="grid-container">
            {!isEmpty(leadsData[0]) &&
              leadsData.map((lead) => {
                if (lead.status === "validated")
                  return (
                    <Card
                      lead={lead}
                      user={userData}
                      users={usersData}
                      key={lead._id}
                    />
                  );
              })}
          </div>
        )}
        {popupInfo ? <PopupInfo closePopupInfo={closePopupInfo} /> : null}
        {infoReliability ? (
          <PopupReliability closePopupReliability={closePopupReliability} />
        ) : null}
        {infoReview ? (
          <PopupReview closePopupReview={closePopupReview} />
        ) : null}
    </main>
  );
};

export default Grid;
