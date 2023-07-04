import React, { useContext, useEffect, useRef } from "react";
import { UidContext } from "../AppContext";

const Messages = ({ messages, buyerModal }) => {
  const uid = useContext(UidContext);
  const divUnderMessages = useRef();

  useEffect(() => {
    const div = divUnderMessages.current;
    if (div) {
      div.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);

  return (
    <>
      {messages[0] ? (
        <div className="messages-container">
          {messages.map((message) => (
            <div
              key={message._id}
              className={
                message.senderID === uid
                  ? "my-messages-display-container"
                  : "notmy-messages-display-container"
              }
            >
              <div
                className={message.senderID === uid ? "my-msg" : "not-my-msg"}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={divUnderMessages}></div>
        </div>
      ) : (
        <div className="messages-display-container">
          <div className="loading">
            <p>Entamez la discussion 💬</p>

            <small>
              {buyerModal
                ? "Utilisez le chat anonyme pour obtenir d'avantages d'informations sur la mission."
                : "Utilisez le chat anonyme pour apporter d'avantages d'informations sur la mission."}
            </small>
          </div>
        </div>
      )}
    </>
  );
};

export default Messages;
