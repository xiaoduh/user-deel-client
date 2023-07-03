import React from "react";
import { dateParser } from "../../utils";

const Recipient = ({ recipient }) => {
  const review = 5;
  return (
    <>
      {recipient ? (
        <>
          <div className="info-user">
            <h2 style={{ marginBottom: "2rem" }}>Vous discutez avec</h2>
            <img className="img-profil" src="./userprofil.svg" />
            {recipient.pseudo ? (
              <h2>{"deeel_User" + recipient._id.slice(12, 24)}</h2>
            ) : (
              <p>L'utilisateur n'a pas renseigné son pseudo </p>
            )}
            <small>Membre depuis le {dateParser(recipient.createdAt)}</small>
            {recipient.user_type === "business_provider" ? (
              <p>Inscrit comme informateur</p>
            ) : (
              <p>Inscrit comme commercial</p>
            )}
            {recipient.nb_annonce < 2 ? (
              <p>
                <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                  {recipient.nb_annonce}{" "}
                </span>
                Annonce publiée
              </p>
            ) : null}
            {recipient.nb_annonce > 1 ? (
              <p>
                <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                  {recipient.nb_annonce}{" "}
                </span>
                Annonces publiées
              </p>
            ) : null}
            {recipient.nb_response_annonce < 2 ? (
              <p>
                <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                  {recipient.nb_response_annonce}{" "}
                </span>
                Réponse à annonce
              </p>
            ) : null}
            {recipient.nb_response_annonce > 1 ? (
              <p>
                <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                  {recipient.nb_response_annonce}{" "}
                </span>
                Réponses à annonce
              </p>
            ) : null}
          </div>
          <div className="review-container">
            <h2>Evaluation</h2>
            {recipient.review[0] ? (
              <div className="">
                {review >= 0 && review <= 1 ? (
                  <div className="review-star">
                    <p>
                      Note :{" "}
                      <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                        {review}/5
                      </span>
                      , sur{" "}
                      <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                        28
                      </span>{" "}
                      évaluations
                    </p>
                    <img className="img-profil" src="./stareview.svg" />
                  </div>
                ) : null}
                {review > 1 && review <= 2 ? (
                  <div className="review-star">
                    <p>
                      Note :{" "}
                      <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                        {review}/5
                      </span>
                      , sur{" "}
                      <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                        28
                      </span>{" "}
                      évaluations
                    </p>
                    <div className="stars">
                      <img className="img-profil" src="./stareview.svg" />
                      <img className="img-profil" src="./stareview.svg" />
                    </div>
                  </div>
                ) : null}
                {review > 2 && review <= 3 ? (
                  <div className="review-star">
                    <p>
                      Note :{" "}
                      <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                        {review}/5
                      </span>
                      , sur{" "}
                      <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                        28
                      </span>{" "}
                      évaluations
                    </p>
                    <div className="stars">
                      <img className="img-profil" src="./stareview.svg" />
                      <img className="img-profil" src="./stareview.svg" />
                      <img className="img-profil" src="./stareview.svg" />
                    </div>
                  </div>
                ) : null}
                {review > 3 && review <= 4 ? (
                  <div className="review-star">
                    <p>
                      Note :{" "}
                      <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                        {review}/5
                      </span>
                      , sur{" "}
                      <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                        28
                      </span>{" "}
                      évaluations
                    </p>
                    <div className="stars">
                      <img className="img-profil" src="./stareview.svg" />
                      <img className="img-profil" src="./stareview.svg" />
                      <img className="img-profil" src="./stareview.svg" />
                      <img className="img-profil" src="./stareview.svg" />
                    </div>
                  </div>
                ) : null}
                {review > 4 ? (
                  <div className="review-star">
                    <p>
                      Note :{" "}
                      <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                        {review}/5
                      </span>
                      , sur{" "}
                      <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                        28
                      </span>{" "}
                      évaluations
                    </p>
                    <div className="stars">
                      <img className="img-profil" src="./stareview.svg" />
                      <img className="img-profil" src="./stareview.svg" />
                      <img className="img-profil" src="./stareview.svg" />
                      <img className="img-profil" src="./stareview.svg" />
                      <img className="img-profil" src="./stareview.svg" />
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="review">
                <p>
                  {"deeel_User" + recipient._id.slice(12, 24)} a aucune
                  évaluation
                </p>
                <img className="img-profil" src="./review.svg" />
              </div>
            )}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Recipient;
