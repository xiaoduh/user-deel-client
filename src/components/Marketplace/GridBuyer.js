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
        <div className="alert-info">
          <div className="pastille pulse"></div>{" "}
          <p>
            🚨 A l'attention des commerciaux.{" "}
            <span style={{ color: "#F7685B" }}>Ne jamais citer deeel</span> lors
            de votre prospection. En revanche, lors de votre prospection vous
            pouvez dire que vous avez eu l'info{" "}
            <span style={{ color: "#2ED47A" }}>
              par des candidats qui ont été contactés pour cette mission
            </span>
            .
          </p>
          <p>
            🚨 Les mises en relation sont exlusives. Il ne peut y avoir qu'une
            seule et unique mise en relation par annonce.
          </p>
        </div>
      </div>
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
  );
};

export default Grid;
