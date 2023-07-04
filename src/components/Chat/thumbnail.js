import React, { useEffect, useState } from "react";

const Thumbnail = ({ data }) => {
  console.log(data);

  return (
    <div className="thumbnail-conversation-container">
      <div className="ref-container"></div>
      <div className="info-container">
        <div className="header-chat-info">
          <h4>{data.lookingFor}</h4>
        </div>

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
            {data.region}
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
            {data.company}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
