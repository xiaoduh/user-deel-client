import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import Card from "./Card";

const Grid = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    leadsData[0] && setIsLoading(false);
  }, [isLoading, leadsData]);

  return (
    <>
      <div
        className="title-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "25rem",
        }}
      >
        <div>
          <h3>
            Annonces d'apports d'affaires
            <span style={{ color: "#109CF1" }}> ({leadsData.length})</span>
          </h3>
          <p>
            Entrez en relation avec les apporteurs d'affaires pour tout savoir
            sur les besoins qui vous intéressent.
          </p>
        </div>
        <div className="alert-info">
          <div className="pastille pulse"></div>{" "}
          <p>
            deeel est une plateforme de mise en relation pour faciliter la{" "}
            <span style={{ color: "#109CF1" }}>prospection</span>.<br></br>{" "}
            Citer deeel lors de votre prospection ne vous sera d'aucune valeur
            ajoutée.
          </p>
        </div>
      </div>
      <main style={{ top: "130px", height: "85%" }}>
        {isLoading ? (
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
      </main>
    </>
  );
};

export default Grid;
