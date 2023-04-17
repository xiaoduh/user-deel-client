import React from "react";
import { useSelector } from "react-redux";
import { dateParser } from "../../utils";

const Profil = () => {
  const user = useSelector((state) => state.userReducer);
  console.log(user);
  return (
    <main className="profil">
      <div className="title-container">
        <h3>
          Mon
          <span style={{ color: "#109CF1" }}> Compte</span>
        </h3>
        <p>Ici, retrouvez toutes vos données personnelles et statistiques.</p>
      </div>
      <div className="profil-info">
        <h3>Mes infos</h3>
        <p>
          {user?.first_name} {user?.last_name}
        </p>
        <p>{user?.user_username}</p>
        <p>{user?.email}</p>
        <p>{user?.phone_number}</p>
        <p>{dateParser(user.createdAt)}</p>
      </div>
      <div className="user-credit-balance">
        <h3>Mes crédits</h3>
        <div className="content">
          <span>{user?.coin}</span> <p>Crédits</p>
        </div>
      </div>
      <div className="user-lead-bought">
        <h3>Mes stats</h3>
        <div className="content">
          <span>{user?.lead_bought?.length}</span> <p>Contacts achetés</p>
        </div>
      </div>
    </main>
  );
};

export default Profil;
