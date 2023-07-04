import React, { useEffect, useState } from "react";

const ConversationThumbnail = ({
  conv,
  leadsData,
  selectedChat,
  selectedConv,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    leadsData[0] && setIsLoading(false);
  }, [isLoading, leadsData]);

  return (
    <>
      {" "}
      {isLoading ? (
        <i className="fas fa-spinner fa-spin loading"></i>
      ) : (
        <div
          onClick={() => selectedChat(conv._id)}
          className={
            "thumbnail-conversation-container " +
            (conv._id === selectedConv ? "selectedConv" : "")
          }
        >
          <div className="ref-container"></div>
          <div className="info-container">
            {isLoading ? (
              <i className="fas fa-spinner fa-spin loading"></i>
            ) : (
              <div className="header-chat-info">
                <h4>
                  {leadsData.map((el) => {
                    if (el._id === conv.leadID) return el.lookingFor;
                  })}
                </h4>
              </div>
            )}
            {isLoading ? (
              <i className="fas fa-spinner fa-spin loading"></i>
            ) : (
              <div className="detail-container">
                <small
                  style={{
                    background: "#109bf13a",
                    padding: "0 .6rem",
                    borderRadius: "20px",
                    border: "1px solid #109CF1",
                    color: "#109CF1",
                  }}
                >
                  📍{"  "}
                  {leadsData.map((el) => {
                    if (el._id === conv.leadID) return el.region;
                  })}
                </small>
                <small
                  style={{
                    background: "#875af849",
                    padding: "0 .6rem",
                    borderRadius: "20px",
                    border: "1px solid #885AF8",
                    color: "#885AF8",
                  }}
                >
                  🏭{"  "}
                  {leadsData.map((el) => {
                    if (el._id === conv.leadID) return el.company;
                  })}
                </small>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ConversationThumbnail;
