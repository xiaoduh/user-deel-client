import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "../AppContext";
import InfoUser from "./InfoUser";
import { upperCase } from "../../utils";
import axios from "axios";
import { uniqBy } from "lodash";
import PopupOffer from "./PopupOffer";
import Messages from "./Messages";

const PopupConversation = ({ closeConversation, dataAnnonce, roomID }) => {
  const uid = useContext(UidContext);
  const [ws, setWs] = useState(null);
  const usersData = useSelector((state) => state.usersReducer);
  const roomsData = useSelector((state) => state.roomsReducer);
  const annoncesData = useSelector((state) => state.annoncesReducer);
  const offers = useSelector((state) => state.offersReducer);
  const [poster, setPoster] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [sender, setSender] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [openOffer, setOpenOffer] = useState(false);
  const [messages, setMessages] = useState([]);
  const [onlinePeople, setOnlinePeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offer, setOffer] = useState(null);
  const [price, setPrice] = useState(2);
  const [offerToDisplay, setOfferToDisplay] = useState(null);

  useEffect(() => {
    if (uid !== dataAnnonce.posterID) {
      const poster = usersData.find((el) => el._id === dataAnnonce.posterID);
      setPoster(poster);
      setSender(uid);
      setRecipient(dataAnnonce.posterID);
      setLoading(false);
    } else setLoading(false);
  }, [loading]);

  useEffect(() => {
    if (offers)
      setOfferToDisplay(offers.find((el) => el.uniqueRoomID === roomID));
  }, [offers]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");
    setWs(ws);
    ws.addEventListener("message", handleMessage);
    ws.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected. Trying to reconnect");
        connectToWs();
      }, 1000);
    });
  }, [recipient]);

  useEffect(() => {
    if (roomID) {
      axios.get(`http://localhost:5000/api/message/${roomID}`).then((res) => {
        setMessages(res.data);
      });
    }
  }, [roomID]);

  useEffect(() => {
    if (roomID) {
      axios.get(`http://localhost:5000/api/offer/${roomID}`).then((res) => {
        setOffer(res.data[0]);
      });
    }
  }, [roomID, offer]);

  function connectToWs() {
    const ws = new WebSocket("ws://localhost:5000");
    setWs(ws);
  }

  function showOnlinePeople(peopleArray) {
    const people = {};
    peopleArray.forEach(({ userId }) => {
      if (userId !== undefined) people[userId] = userId;
    });
    setOnlinePeople(people);
  }

  function handleMessage(e) {
    const messageData = JSON.parse(e.data);
    // console.log(messageData);

    if ("online" in messageData) {
      // console.log(messageData);
      showOnlinePeople(messageData.online);
    } else if ("text" in messageData) {
      // console.log(messageData);
      setMessages((prev) => [
        ...prev,
        {
          ...messageData,
        },
      ]);
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const roomID = await roomsData.find(
      (el) => el.uniqueID === dataAnnonce._id + dataAnnonce.posterID + uid
    );
    ws.send(
      JSON.stringify({
        message: {
          uniqueRoomID: roomID.uniqueID,
          sender: uid,
          recipient: recipient,
          text: newMessage,
        },
      })
    );
    setMessages((prev) => [
      ...prev,
      {
        RoomID: roomID.uniqueID,
        senderID: uid,
        recipientID: recipient,
        text: newMessage,
        _id: Date.now(),
      },
    ]);
    setNewMessage("");
  };

  const closeOfferForm = () => {
    setOpenOffer(false);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const messagesWithoutDupes = uniqBy(messages, "_id");

  // console.log(roomID);

  return (
    <>
      {loading ? (
        <div className="popup-conv">
          <div className="modal chatpage">
            <i className="fas fa-spinner fa-spin loading"></i>
          </div>
        </div>
      ) : (
        <div className="popup-conv">
          <div className="modal chatpage">
            <div className="close-conv">
              <img
                src="./traverser.svg"
                alt="close"
                onClick={() => closeConversation()}
              />
            </div>
            <div className="conversation-container">
              <div className="left-container">
                <div className="title">
                  <h2>{dataAnnonce.title}</h2>
                </div>
                <div className="content">
                  <p>📑 {dataAnnonce.detail}</p>
                </div>
                <div className="goal">
                  <p>🎯 Résultat attendu: {dataAnnonce.result}</p>
                </div>
                <div className="price">
                  <p>💸 Budget: {dataAnnonce.budgetMax} €</p>
                </div>
                <div className="type">
                  {dataAnnonce.type === "linking" ? (
                    <p>❤️ Type de recherche : Recommandation</p>
                  ) : null}
                  {dataAnnonce.type === "job" ? (
                    <p>💼 Type de recherche : Mission</p>
                  ) : null}
                  {dataAnnonce.type === "contact" ? (
                    <p>✉️ Type de recherche : Contact</p>
                  ) : null}
                  {dataAnnonce.type === "info" ? (
                    <p>🕵️ Type de recherche : Autres infos</p>
                  ) : null}
                </div>
              </div>
              <div className="center-container">
                <div className="header-conv">
                  <div className="chatter">{/* <h3>{user.pseudo}</h3> */}</div>
                  {offerToDisplay != null &&
                  offerToDisplay.statut === "open" ? (
                    <div className="offre-container">
                      {offer && (
                        <p className="etiquette">
                          Offre en cours{" "}
                          <span style={{ color: "#2ED47A" }}>
                            {offer && offer.price}
                          </span>{" "}
                          €
                        </p>
                      )}
                      {uid === dataAnnonce.userID && price !== 0 ? (
                        <p className="etiquette">
                          Offre en cours{" "}
                          <span style={{ color: "#2ED47A" }}>
                            {price && (price * 1.2).toFixed(2)}
                          </span>{" "}
                          €
                        </p>
                      ) : null}
                      {offer && dataAnnonce.posterID === uid ? (
                        <button className="btn-confirm">
                          Accepter l'offre
                        </button>
                      ) : null}
                    </div>
                  ) : null}

                  {offerToDisplay != null &&
                  offerToDisplay.statut === "closed" ? (
                    <div className="offre-container">
                      {offer ? (
                        <p className="etiquette-accepted">
                          Offre acceptée à{" "}
                          <span style={{ color: "#2ED47A" }}>
                            {offerToDisplay.price}
                          </span>{" "}
                          €
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  {offerToDisplay && offerToDisplay.statut === "open" ? (
                    dataAnnonce.posterID !== uid ? (
                      <div
                        className="cta-propal"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <button
                          style={{ margin: "0 1rem 0 0" }}
                          onClick={() => setOpenOffer(true)}
                        >
                          Faire une proposition
                        </button>{" "}
                      </div>
                    ) : null
                  ) : null}
                </div>
                {dataAnnonce.posterID !== uid ? (
                  <div className="content-conv">
                    {!!roomID && messagesWithoutDupes[0] ? (
                      <Messages
                        messages={messagesWithoutDupes}
                        roomInfo={dataAnnonce._id + dataAnnonce.posterID + uid}
                      />
                    ) : (
                      <div
                        className="messages-container"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <p
                          style={{
                            margin: "0 auto",
                            background: "#ffb84652",
                            color: "#FFB946",
                            padding: "1rem",
                            borderRadius: "5px",
                          }}
                        >
                          Aucun message à afficher
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="content-conv">
                    <div className="messages-container">
                      <p>
                        Pour suivre les retours de votre annonce. RDV dans votre
                        Messagerie
                      </p>
                    </div>
                  </div>
                )}

                <div className="message-input">
                  <form
                    onSubmit={(e) =>
                      handleSendMessage(e, newMessage, sender, recipient)
                    }
                  >
                    {dataAnnonce.posterID !== uid ? (
                      <>
                        <input
                          type="text"
                          placeholder="Entrez votre message ici..."
                          onChange={(e) => setNewMessage(e.target.value)}
                          value={newMessage}
                        />
                        <button type="submit" className="send-btn">
                          <img src="./send.svg" />
                        </button>
                      </>
                    ) : null}
                  </form>
                </div>
              </div>
              <div className="right-container conv">
                {/* {dataAnnonce.posterID !== uid ? (
                  <InfoUser dataAnnonce={dataAnnonce} usersData={usersData} />
                ) : (
                  <div className="info-user">
                    <img className="img-profil" src="./404.svg" />
                    <h2>C'est votre annonce.</h2>
                  </div>
                )} */}
                <InfoUser dataAnnonce={dataAnnonce} usersData={usersData} />
              </div>
            </div>
          </div>
        </div>
      )}
      {openOffer && (
        <PopupOffer
          closeOfferForm={closeOfferForm}
          openOffer={openOffer}
          recipient={recipient}
          dataAnnonce={dataAnnonce}
          handleMessage={handleMessage}
          ws={ws}
          handlePrice={handlePrice}
          price={price}
        />
      )}
    </>
  );
};

export default PopupConversation;
