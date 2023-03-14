import React from "react";
import { useSelector } from "react-redux";
import { dateParser, upperCase } from "../../utils";

const Profil = () => {
  const user = useSelector((state) => state.userReducer);
  console.log(user);
  return (
    <main>
      <div className="info-user-container">
        <div className="wrapper">
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
            <h3>Mes cédrits</h3>
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
        </div>
      </div>
    </main>
  );
};

export default Profil;
