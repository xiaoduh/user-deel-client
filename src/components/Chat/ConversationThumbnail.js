import React from "react";

const ConversationThumbnail = ({ leadData }) => {
  return (
    <div className="thumbnail-conversation-container">
      <h4>{leadData.lookingFor}</h4>
      <small>
        {leadData._id.slice(leadData._id.length - 4, leadData._id.length)}
      </small>
    </div>
  );
};

export default ConversationThumbnail;
