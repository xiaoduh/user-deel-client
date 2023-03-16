import React from "react";

const Plan = () => {
  return (
    <main>
      <div className="plan-container">
        <div className="wrapper">
          <div className="header-plan">
            <h2>
              <span>1</span> Crédit
            </h2>
            <small>99,99€ par lead</small>
          </div>
          <div className="plan-content">
            <p>
              99,<span> 99 €</span>
            </p>
            <small>TTC</small>
          </div>
          <button className="btn-confirm">Acheter</button>
        </div>
        <div className="wrapper main-plan">
          <div className="header-plan">
            <h2>
              <span>5</span> Crédits
            </h2>
            <small>69,99€ par lead</small>
          </div>
          <div className="plan-content">
            <p>
              345,<span> 99 €</span>
            </p>
            <small>TTC</small>
          </div>
          <button className="btn-confirm">Acheter</button>
        </div>
        <div className="wrapper">
          <div className="header-plan">
            <h2>
              <span>10</span> Crédits
            </h2>
            <small>49,99€ par lead</small>
          </div>
          <div className="plan-content">
            <p>
              499,<span> 99 €</span>
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
