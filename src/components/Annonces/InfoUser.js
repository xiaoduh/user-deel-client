import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import { dateParser, upperCase } from "../../utils";

const InfoUser = ({ dataAnnonce, usersData }) => {
  const uid = useContext(UidContext);
  const [user, setUser] = useState(null);
  const review = 3;

  useEffect(() => {
    const user = usersData.find((el) => el._id === dataAnnonce.posterID);
    setUser(user);
  }, [user]);

  return (
    <>
      {user ? (
        <>
          <div className="info-user">
            <h2 style={{ marginBottom: "2rem" }}>
              Informations sur l'annonceur
            </h2>
            <img className="img-profil" src="./userprofil.svg" />

            {user.pseudo ? (
              <h2>{"deeel_User" + user._id.slice(12, 24)}</h2>
            ) : (
              <p>L'utilisateur n'a pas renseigné son pseudo </p>
            )}
            <small>Membre depuis le {dateParser(user.createdAt)}</small>
            {user.user_type === "business_provider" ? (
              <p>Inscrit comme informateur</p>
            ) : (
              <p>Inscrit comme commercial</p>
            )}

            {user.nb_annonce < 2 ? (
              <p>
                <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                  {user.nb_annonce}{" "}
                </span>
                Annonce publiée
              </p>
            ) : null}
            {user.nb_annonce > 1 ? (
              <p>
                <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                  {user.nb_annonce}{" "}
                </span>
                Annonces publiées
              </p>
            ) : null}
            {user.nb_response_annonce < 2 ? (
              <p>
                <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                  {user.nb_response_annonce}{" "}
                </span>
                Réponse à annonce
              </p>
            ) : null}
            {user.nb_response_annonce > 1 ? (
              <p>
                <span style={{ color: "#109CF1", fontWeight: "bold" }}>
                  {user.nb_response_annonce}{" "}
                </span>
                Réponses à annonce
              </p>
            ) : null}
          </div>
          <div className="review-container">
            <h2>Evaluation</h2>
            {user.review[0] ? (
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
                  {"deeel_User" + user._id.slice(12, 24)} a aucune évaluation
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

export default InfoUser;
