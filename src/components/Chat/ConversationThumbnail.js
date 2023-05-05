import React from "react";

const ConversationThumbnail = ({ leadData }) => {
  return (
    <div className="thumbnail-conversation-container">
      {/* <div className="ref-container">
        <p>
          {leadData.dealerID.slice(
            leadData._id.length - 4,
            leadData._id.length
          )}
        </p>
      </div> */}
      <div className="info-container">
        <h4>{leadData.lookingFor}</h4>
        <div className="details-container">
          <small id="sector">{leadData.sector}</small>
          <small id="region">{leadData.region}</small>
          <small id="company">{leadData.company}</small>
        </div>
      </div>
    </div>
  );
};

export default ConversationThumbnail;
