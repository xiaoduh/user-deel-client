import React, { useContext, useState, useEffect } from "react";
import { UidContext } from "../AppContext";
import { useDispatch } from "react-redux";
import { updateCountResponse } from "../../actions/user.actions";

const PopupOffer = ({
  closeOfferForm,
  recipient,
  dataAnnonce,
  ws,
  handlePrice,
  price,
  setOffer,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const uid = useContext(UidContext);
  const [uniqueID, setUniqueID] = useState(null);
  const [sent, setSent] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dataAnnonce && setUniqueID(dataAnnonce._id + dataAnnonce.posterID + uid);
  }, []);

  const sendOffer = async (e) => {
    const amount = (price * 1.2).toFixed(2);
    e.preventDefault();
    setIsLoading(true);
    const offer = {
      uniqueRoomID: uniqueID,
      annonceID: dataAnnonce._id,
      recipientID: recipient,
      userID: uid,
      price: amount,
    };
    setOffer(offer);
    if (uniqueID) {
      setIsLoading(true);
      ws.send(
        JSON.stringify({
          message: {
            uniqueRoomID: uniqueID,
            annonceID: dataAnnonce._id,
            recipientID: recipient,
            userID: uid,
            price: amount,
          },
        })
      );
      dispatch(updateCountResponse(uid));
      setSent(true);
      setIsLoading(false);
    } else console.log("Unique ID missing");
  };

  return (
    <div className="popup">
      {sent ? (
        <div className="modal">
          <div className="succes-container">
            <img src="./verified.svg" style={{ width: "48px" }} />
            <h2>Offre envoyée 👍</h2>
            <button
              style={{ marginTop: "1rem" }}
              className="btn-cancel"
              onClick={() => closeOfferForm()}
            >
              Quitter
            </button>
          </div>
        </div>
      ) : (
        <div className="modal">
          <div className="close-conv">
            <img
              src="./traverser.svg"
              alt="close"
              onClick={() => closeOfferForm()}
            />
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
                    }}
                  >
                    Prix commission incluse :{" "}
                    <span
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      {(price * 1.2).toFixed(2)} €
                    </span>
                  </h2>
                </div>
                <div className="flex-container">
                  <img src="./1.svg" />
                  {dataAnnonce.type === "linking" ? (
                    <h2>
                      Combien souhaitez-vous percevoir pour cette recommandation
                      ?
                    </h2>
                  ) : null}
                  {dataAnnonce.type === "job" ? (
                    <h2>
                      Combien souhaitez-vous percevoir pour l'apport de cette
                      mission ?
                    </h2>
                  ) : null}
                  {dataAnnonce.type === "contact" ? (
                    <h2>
                      Combien souhaitez-vous percevoir pour l'apport de ce
                      contact ?
                    </h2>
                  ) : null}
                  {dataAnnonce.type === "info" ? (
                    <h2>
                      Combien souhaitez-vous percevoir pour l'apport de ces
                      informations ?
                    </h2>
                  ) : null}
                </div>
                <input
                  type="number"
                  className="price"
                  required
                  style={{ width: "100%", marginBottom: "1rem" }}
                  min={0}
                  onChange={(e) => handlePrice(e)}
                />
              </div>

              <div className="CTA-annonce">
                <button type="submit" onClick={(e) => sendOffer(e)}>
                  {isLoading ? (
                    <>
                      Chargement... <i className="fas fa-spinner fa-spin"></i>
                    </>
                  ) : (
                    <p>Envoyer mon offre</p>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PopupOffer;
