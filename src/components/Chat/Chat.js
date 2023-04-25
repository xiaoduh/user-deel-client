import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
  const user = useSelector((state) => state.userReducer);
  return (
    <main className="conversation-container">
      <div className="title-container">
        <h3 style={{ fontSize: "1.5rem" }}>Mes mises en relation</h3>
        <p>
          Ici, échangez en tout anonymat avec{" "}
          {user && user.isSales
            ? "vos apporteurs d'affaires."
            : "vos acheteurs."}
          <div className="chat-container">
            <div className="conversation-list">liste</div>
            <div className="chat-room">chat room</div>
          </div>
        </p>
      </div>
    </main>
  );
};

export default Chat;
