import React, { useState } from "react";
import { useSelector } from "react-redux";

const PopGain = ({ closeGain }) => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.userReducer);

  return (
    <div className="popup">
      <div className="modal">
        <div className="close-conv">
          <img src="./traverser.svg" alt="close" onClick={() => closeGain()} />
        </div>
        <form className="content-container">
          <div className="title-annonce">
            <div className="container">
              <div
                className="display-price"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem 0",
                }}
              >
                <h2
                  style={{
                    background: "#109bf13a",
                    padding: "2rem",
                    borderRadius: "5px",
                    color: "#2ED47A",
                  }}
                >
                  {parseFloat(user.solde).toFixed(2)} €
                </h2>
              </div>
            </div>
            <div>
              <h2>
                Pour retirer vos gains envoyer un mail à{" "}
                <span
                  style={{
                    background: "#109bf13a",
                    padding: ".5rem",
                    borderRadius: "5px",
                    color: "#2ED47A",
                  }}
                >
                  hello@deeel.fr
                </span>{" "}
                en indiquant votre ID{" "}
                <span
                  style={{
                    background: "#109bf13a",
                    padding: ".5rem",
                    borderRadius: "5px",
                    color: "#2ED47A",
                  }}
                >
                  {user._id}
                </span>
              </h2>
            </div>

            {/* <div className="CTA-annonce">
              <button type="submit">
                {isLoading ? (
                  <>
                    Chargement... <i className="fas fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <p>Envoyer mon offre</p>
                )}
              </button>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopGain;
