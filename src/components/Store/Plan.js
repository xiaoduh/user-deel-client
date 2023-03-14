import React from "react";

const Plan = () => {
  return (
    <main>
      <div className="plan-container">
        <div className="wrapper">
          <div className="header-plan">
            <h2>
              <span>10</span> Crédits
            </h2>
            <small>19,99€ par lead</small>
          </div>
          <div className="plan-content">
            <p>
              199,<span> 99 €</span>
            </p>
            <small>TTC</small>
          </div>
          <button className="btn-confirm">Acheter</button>
        </div>
      </div>
    </main>
  );
};

export default Plan;
