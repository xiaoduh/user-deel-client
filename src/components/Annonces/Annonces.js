import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import { UidContext } from "../AppContext";
import CardAnnonce from "./CardAnnonce";
import PopupConversation from "./PopupConversation";
import PopupIsLogged from "./PopupIsLogged";
import PopupPostAnnonce from "./PopupPostAnnonce";
import { createRoom } from "../../actions/room.action";
import PopupDiscussions from "./PopupDiscussions";
import { getAnnonces } from "../../actions/annonces.action";
import PopGain from "./PopGain";
// import PopupDiscussions from "./PopupDiscussions";

const Annonces = ({
  isPosting,
  popupDiscussions,
  closeIsPosting,
  closeDiscussions,
  popupGain,
  closeGain,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [dataAnnonce, setDataAnnonce] = useState({});
  const annoncesData = useSelector((state) => state.annoncesReducer);
  const [popupConversation, setPopupConversation] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();
  const [count, setCount] = useState(100);
  const [roomID, setRoomID] = useState(null);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setIsLoading(true);
      setCount(count + 100);
    }
  };

  useEffect(() => {
    if (isLoading) {
      dispatch(getAnnonces(count));
      setIsLoading(false);
    }

    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [isLoading, annoncesData]);

  const handleConversation = (annonce) => {
    if (uid) {
      setDataAnnonce(annonce);
      setPopupConversation(true);
      if (uid !== annonce.posterID) {
        const uniqueID = annonce._id + annonce.posterID + uid;
        console.log(annonce._id, annonce.posterID, uid, uniqueID);
        setRoomID(uniqueID);
        dispatch(createRoom(annonce._id, annonce.posterID, uid, uniqueID));
      }
    } else {
      setIsLogged(true);
    }
  };

  const closeConversation = () => {
    setRoomID(null);
    setPopupConversation(false);
  };

  const closeIsLogged = () => {
    setIsLogged(false);
  };

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <i className="fas fa-spinner fa-spin loading"></i>
        </div>
      ) : (
        <main>
          {isPosting || popupDiscussions || popupConversation ? null : (
            <div className="grid-container">
              {!isEmpty(annoncesData[0]) &&
                annoncesData.map((annonce) => {
                  if (annonce.isActive === true)
                    return (
                      <CardAnnonce
                        key={annonce._id}
                        annonce={annonce}
                        handleConversation={handleConversation}
                      />
                    );
                })}
            </div>
          )}

          {popupConversation ? (
            <PopupConversation
              closeConversation={closeConversation}
              dataAnnonce={dataAnnonce}
              roomID={roomID}
            />
          ) : null}
          {isLogged ? <PopupIsLogged closeIsLogged={closeIsLogged} /> : null}
          {isPosting ? (
            <PopupPostAnnonce closeIsPosting={closeIsPosting} />
          ) : null}
          {popupDiscussions ? (
            <PopupDiscussions closeDiscussions={closeDiscussions} />
          ) : null}
          {popupGain ? <PopGain closeGain={closeGain} /> : null}
        </main>
      )}
    </>
  );
};

export default Annonces;
