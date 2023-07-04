import React, { useContext, useEffect, useRef, useState } from "react";
import { UidContext } from "../AppContext";
import { dateParser } from "../../utils";

const Messages = ({ messages, roomInfo }) => {
  const uid = useContext(UidContext);
  const divUnderMessages = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const div = divUnderMessages.current;
    if (div) {
      div.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    messages && setLoading(false);
  }, [loading, messages]);

  return (
    <>
      {loading ? (
        <div className="messages-container loading">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Chargement de la conversation</p>
        </div>
      ) : messages[0] ? (
        <div className="messages-container">
          {messages.map((message) => {
            if (
              message.roomID == roomInfo.uniqueID ||
              message.roomID == roomInfo
            ) {
              return (
                <div
                  key={message._id}
                  className={
                    message.senderID === uid
                      ? "my-messages-display-container"
                      : "notmy-messages-display-container"
                  }
                >
                  <div
                    className={
                      message.senderID === uid ? "my-msg" : "not-my-msg"
                    }
                  >
                    <p>{message.text}</p>
                    {message.createdAt ? (
                      <small>{dateParser(message.createdAt)}</small>
                    ) : (
                      <small>Aujourd'hui</small>
                    )}
                  </div>
                </div>
              );
            }
          })}
          <div ref={divUnderMessages}></div>
        </div>
      ) : (
        <div
          className="messages-container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p
            style={{
              margin: "0 auto",
              background: "#ffb84652",
              color: "#FFB946",
              padding: "1rem",
              borderRadius: "5px",
            }}
          >
            Aucun message à afficher
          </p>
        </div>
      )}
    </>
  );
};

export default Messages;
