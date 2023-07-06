import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAnnonces, postAnnonce } from "../../actions/annonces.action";
import { UidContext } from "../AppContext";
import { updateCountAnnonce } from "../../actions/user.actions";

const PopupPostAnnonce = ({ closeIsPosting }) => {
  const dispatch = useDispatch();
  const uid = useContext(UidContext);
  const [formCompleted, setFormCompleted] = useState(false);
  const [type, setType] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [goal, setGoal] = useState("");
  const [price, setPrice] = useState(null);
  const [progressBar, setProgressBar] = useState(0);
  const [loading, setLoading] = useState(false);
  const [posted, setPosted] = useState(false);

  const checkType = (e) => {
    setType(e.target.value);
    setProgressBar(20);
    const errorTypeRequired = document.querySelector(".type-info");
    if (!e.target.value || e.target.value === null)
      errorTypeRequired.style.border = "1px solid #F7685B";
    else errorTypeRequired.style.border = "1px solid #2ED47A";
  };

  const checkWhat = (e) => {
    setTitle(e.target.value);
    setProgressBar(40);
    const errorWhatRequired = document.querySelector(".what");
    if (!e.target.value || e.target.value === null)
      errorWhatRequired.style.border = "1px solid #F7685B";
    else errorWhatRequired.style.border = "1px solid #2ED47A";
  };

  const checkContent = (e) => {
    setContent(e.target.value);
    setProgressBar(60);
    const errorContentRequired = document.querySelector(".description");
    if (!e.target.value || e.target.value === null)
      errorContentRequired.style.border = "1px solid #F7685B";
    else errorContentRequired.style.border = "1px solid #2ED47A";
  };

  const checkGoal = (e) => {
    setGoal(e.target.value);
    setProgressBar(80);
    const errorGoalRequired = document.querySelector(".goal");
    if (!e.target.value || e.target.value === null)
      errorGoalRequired.style.border = "1px solid #F7685B";
    else errorGoalRequired.style.border = "1px solid #2ED47A";
  };

  const checkPrice = (e) => {
    setPrice(e.target.value);
    setProgressBar(100);
    const errorPriceRequired = document.querySelector(".price");
    if (!e.target.value || e.target.value === null)
      errorPriceRequired.style.border = "1px solid #F7685B";
    else errorPriceRequired.style.border = "1px solid #2ED47A";
  };

  const handlePostAnnonce = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(postAnnonce(uid, type, title, content, goal, price)).then(
      (res) => {
        dispatch(updateCountAnnonce(uid));
        dispatch(getAnnonces());
        setType(null);
        setTitle(null);
        setContent(null);
        setGoal(null);
        setPrice(null);
        setFormCompleted(false);
        setLoading(false);
        setPosted(true);
      }
    );
  };

  useEffect(() => {
    if (type && title && content && goal && price) {
      setFormCompleted(true);
    }
  }, [type, title, content, goal, price]);

  return (
    <div className="popup">
      {posted ? (
        <div className="modal">
          <div className="succes-container">
            <img src="./verified.svg" style={{ width: "48px" }} />
            <h2>Annonce publiée 👍</h2>
            <button onClick={() => setPosted(false)}>
              Publier une autre annonce
            </button>
            <button
              style={{ marginTop: "1rem" }}
              className="btn-cancel"
              onClick={() => closeIsPosting()}
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
              onClick={() => closeIsPosting()}
            />
          </div>
          <div className="progress-bar-container">
            <input type="range" min={0} max={100} value={progressBar} />
          </div>
          <form className="content-container">
            <div className="title-annonce">
              <div className="flex-container">
                <img src="./1.svg" />
                <h2> Quel est le type de votre recherche ?</h2>
              </div>
              <select
                name="type"
                id="type-info"
                className="type-info"
                onChange={(e) => checkType(e)}
                value={type}
                required
                style={{ width: "100%" }}
              >
                {!type && (
                  <option value="">
                    Choisissez le type d'information que vous recherchez
                  </option>
                )}
                <option value="contact">Un contact</option>
                <option value="linking">Une mise en relation</option>
                <option value="job">Une mission</option>
                <option value="info">
                  Autres informations (format email, stack technique,
                  compétences recherchées...)
                </option>
              </select>
            </div>
            {type && (
              <div className="title-annonce">
                <div className="container">
                  <div className="flex-container">
                    <img src="./2.svg" />
                    <h2>Indiquez le titre de votre annonce</h2>
                  </div>
                  <input
                    type="text"
                    className="what"
                    placeholder={
                      type === "contact"
                        ? "Ex: Recherche contact chez YYYYY."
                        : "Ex: Recherche Mission ou mise en relation chez YYYY"
                    }
                    required
                    onChange={(e) => checkWhat(e)}
                    maxlength="40"
                    style={{ width: "100%" }}
                    value={title}
                  />
                  <small>{40 - title.length} characteres disponibles</small>
                </div>
              </div>
            )}
            {title && (
              <div className="title-annonce">
                <div className="container">
                  <div className="flex-container">
                    <img src="./3.svg" />
                    <h2>Détaillez précisement ce que vous recherchez</h2>
                  </div>
                  <textarea
                    type="text"
                    className="description"
                    required
                    value={content}
                    onChange={(e) => checkContent(e)}
                    maxlength="200"
                    style={{ width: "100%" }}
                    placeholder="Ex: Bonjour, je recherche un contact chez Tartempion sur le projet Y."
                  />
                  <small>{200 - content.length} characteres disponibles</small>
                </div>
              </div>
            )}
            {content && (
              <div className="title-annonce">
                <div className="container">
                  <div className="flex-container">
                    <img src="./4.svg" />
                    <h2>
                      Indiquez précisement ce que vous attendez comme
                      information
                    </h2>
                  </div>
                  <textarea
                    type="text"
                    className="goal"
                    required
                    value={goal}
                    onChange={(e) => checkGoal(e)}
                    maxlength="80"
                    style={{ width: "100%" }}
                    placeholder="Ex: Un contact décisionnaire sur le projet XYXYXY"
                  />
                  <small>{80 - goal.length} characteres disponibles</small>
                </div>
              </div>
            )}
            {goal && (
              <div className="title-annonce">
                <div className="container">
                  <div className="flex-container">
                    <img src="./5.svg" />
                    <h2>Quel est votre budget pour cette recherche ?</h2>
                  </div>
                  <input
                    type="number"
                    className="price"
                    required
                    value={price}
                    style={{ width: "100%" }}
                    onChange={(e) => checkPrice(e)}
                  />
                </div>
              </div>
            )}

            {formCompleted && (
              <div className="CTA-annonce">
                <button type="submit" onClick={(e) => handlePostAnnonce(e)}>
                  {loading ? (
                    <>
                      Chargement... <i className="fas fa-spinner fa-spin"></i>
                    </>
                  ) : (
                    <p>Publier mon annonce</p>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default PopupPostAnnonce;
