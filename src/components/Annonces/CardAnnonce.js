import React, { useContext, useState, useEffect } from "react";
import { UidContext } from "../AppContext";

const CardAnnonce = ({ annonce, handleConversation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const uid = useContext(UidContext);

  useEffect(() => {
    annonce && setIsLoading(false);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <i className="fas fa-spinner fa-spin loading"></i>
        </div>
      ) : (
        <div
          className="card-container"
          onClick={() => handleConversation(annonce)}
        >
          <div className="card-img">
            {annonce.type === "contact" ? <img src="./contact5.svg" /> : null}
            {annonce.type === "job" ? <img src="./job1.svg" /> : null}
            {annonce.type === "linking" ? <img src="./reco2.svg" /> : null}
            {annonce.type === "info" ? <img src="./otherinfo.svg" /> : null}
          </div>
          <div className="card-header">
            <h3>{annonce.title.slice(0, 40)}</h3>
          </div>
          <div className="card-content">
            {" "}
            <p>📑 {annonce.detail.slice(0, 140)}</p>
            <small>🎯 {annonce.result.slice(0, 60)}</small>
          </div>
          <div className="call-to-action">
            {annonce.type === "linking" ? (
              <p>💸 Budget: {annonce.budgetMax} €</p>
            ) : null}
            {annonce.type === "job" ? (
              <p style={{ background: "#ffb84652", color: "#FFB946" }}>
                💸 Budget: {annonce.budgetMax} €
              </p>
            ) : null}
            {annonce.type === "contact" ? (
              <p style={{ background: "#875af849", color: "#885AF8" }}>
                💸 Budget: {annonce.budgetMax} €
              </p>
            ) : null}
            {annonce.type === "info" ? (
              <p style={{ background: "#109bf13a", color: "#109CF1" }}>
                💸 Budget: {annonce.budgetMax} €
              </p>
            ) : null}
            {annonce.type === "info" ? (
              <p style={{ background: "#109bf13a", color: "#109CF1" }}>
                🕵️ Autres Infos
              </p>
            ) : null}
            {annonce.type === "linking" ? <p>❤️ Recommandation</p> : null}
            {annonce.type === "job" ? (
              <p style={{ background: "#ffb84652", color: "#FFB946" }}>
                💼 Mission
              </p>
            ) : null}
            {annonce.type === "contact" ? (
              <p style={{ background: "#875af849", color: "#885AF8" }}>
                ✉️ Contact
              </p>
            ) : null}

            {/* <button onClick={() => handleConversation(annonce)}>Contacter</button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default CardAnnonce;
