import React from "react";
import { useSelector } from "react-redux";
import { dateParser } from "../../utils";

const Profil = () => {
  const user = useSelector((state) => state.userReducer);
  return (
    <>
      <div className="title-container">
        <h3>Mon compte</h3>
        <p>Ici, retrouvez toutes vos données personnelles et statistiques.</p>
      </div>
      <main className="profil">
        <div className="profil-info">
          <h3>Mes infos 📋</h3>
          <p>
            {user?.first_name} {user?.last_name}
          </p>
          <p>{user?.user_username}</p>
          <p>{user?.email}</p>
          {user?.user_type === "business_provider" ? (
            <p>Apporteur d'affaires</p>
          ) : (
            <p>Commercial</p>
          )}
          <p>{user?.phone_number}</p>
          <p>{dateParser(user.createdAt)}</p>
        </div>
        <div className="user-credit-balance">
          <h3>Mes crédits 💰</h3>
          <div className="content">
            <span>{user?.coin}</span> <p>Crédits</p>
          </div>
        </div>
        <div className="user-lead-bought">
          <h3>Mes stats 📊</h3>
          <div className="content">
            {user?.user_type === "business_provider" ? (
              <>
                <span>{user.nb_lead}</span> <p>Annonces publiées</p>
              </>
            ) : (
              <>
                <span>{user?.lead_bought?.length}</span>{" "}
                <p>Mises en ralation</p>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Profil;
