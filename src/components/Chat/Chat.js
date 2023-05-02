import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ConversationThumbnail from "./ConversationThumbnail";

const Chat = ({ convs }) => {
  const user = useSelector((state) => state.userReducer);
  const leadsData = useSelector((state) => state.leadsReducer);
  const usersData = useSelector((state) => state.usersReducer);

  const display = (id) => {
    for (let i = 0; i < leadsData.length; i++) {
      if (leadsData._id === id) {
        return console.log("affiché");
      } else return null;
    }
  };

  // user.lead_bought.map((el) => (el == chat.leadID ? () => display(el) : null));

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
              <div className="conversation-header">
                <h4>Mes sujets de conversations</h4>
              </div>
              {Array.isArray(convs) &&
                convs.map((chat) => {
                  for (let i = 0; i < user.lead_bought.length; i++) {
                    if (chat.leadID === user.lead_bought[i]) {
                      for (let i = 0; i < leadsData.length; i++) {
                        if (chat.leadID === leadsData[i]._id) {
                          return (
                            <ConversationThumbnail leadData={leadsData[i]} />
                          );
                        }
                      }
                    }
                  }
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
