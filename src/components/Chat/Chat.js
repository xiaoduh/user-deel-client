import React from "react";
import { useSelector } from "react-redux";
import ConversationThumbnail from "./ConversationThumbnail";

const Chat = () => {
  const user = useSelector((state) => state.userReducer);
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
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
            <div className="conversation-list">
              {Array.isArray(arr) &&
                arr.map((chat) => {
                  return <ConversationThumbnail />;
                })}
            </div>
            <div className="chat-room">
              <div className="messanges-container">messages</div>
              <div className="input-message">
                {" "}
                <input type="text" />
                <button>Envoyer</button>
              </div>
            </div>
          </div>
        </p>
      </div>
    </main>
  );
};

export default Chat;
