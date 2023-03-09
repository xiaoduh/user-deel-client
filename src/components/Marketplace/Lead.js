import React from "react";

const Lead = ({ lead }) => {
  //   console.log(lead);
  return (
    <div className="lead-container">
      <div className="name">
        <p>
          {lead.first_name} {lead.last_name}
        </p>
      </div>
      <div className="email">
        <p>{lead.email}</p>
      </div>
      <div className="enterprise">
        <p>{lead.company}</p>
      </div>
      <div className="lookingfor">
        <p>{lead.lookingFor}</p>
      </div>
      <div className="reliability">
        <p>Fiabilité</p>
      </div>
      <div className="cool">
        <p>Fraicheur</p>
      </div>
      <div className="unlock">
        <button>Débloquer</button>
      </div>
    </div>
  );
};

export default Lead;
