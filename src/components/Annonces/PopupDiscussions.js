import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UidContext } from "../AppContext";
import InfoRoom from "./InfoRoom";
import InfoUser from "./InfoUser";
import { upperCase } from "../../utils";
import Recipient from "./Recipient";
import axios from "axios";
import { uniqBy } from "lodash";
import PopupOffer from "./PopupOffer";
import Messages from "./Messages";
import PopupPayment from "./PopupPayment";
import { getOffers } from "../../actions/offers.actions";

const PopupDiscussions = ({ closeDiscussions }) => {
  const uid = useContext(UidContext);
  const [ws, setWs] = useState(null);
  const usersData = useSelector((state) => state.usersReducer);
  const roomsData = useSelector((state) => state.roomsReducer);
  const annoncesData = useSelector((state) => state.annoncesReducer);
  const offers = useSelector((state) => state.offersReducer);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedRoomUser, setSelectedRoomUser] = useState(null);
  const [selectedRoomPoster, setSelectedRoomPoster] = useState(null);
  const [roomInfo, setRoomInfo] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [sender, setSender] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [openOffer, setOpenOffer] = useState(false);
  const [messages, setMessages] = useState([]);
  const [onlinePeople, setOnlinePeople] = useState([]);
  const [offer, setOffer] = useState(null);
  const [price, setPrice] = useState(0);
  const [openPayment, setOpenPayement] = useState(false);
  const [offerToDisplay, setOfferToDisplay] = useState(null);
  const dispatch = useDispatch();
  const [paymentSuccessfully, setPaymentSuccessfully] = useState(false);

  useEffect(() => {
    if (roomInfo) {
      axios
        .get(
          `https://deeel-v0-test.onrender.com/api/offer/${roomInfo.uniqueID}`
        )
        .then((res) => {
          setOffer(res.data[0]);
        });
    }
  }, [roomInfo, offer]);

  useEffect(() => {
    if (offers && roomInfo) {
      const fetchOffers = async () => {
        await dispatch(getOffers());
      };
      fetchOffers();
      setOfferToDisplay(
        offers.find((el) => el.uniqueRoomID === roomInfo.uniqueID)
      );
      setPaymentSuccessfully(false);
    }
  }, [paymentSuccessfully, offer]);

  useEffect(() => {
    if (selectedRoomUser && selectedRoomPoster) {
      if (uid == selectedRoomUser._id) {
        setSender(selectedRoomUser._id);
        setRecipient(selectedRoomPoster._id);
      } else {
        setSender(selectedRoomPoster._id);
        setRecipient(selectedRoomUser._id);
      }
    }
  }, [selectedRoomUser, selectedRoomPoster]);

  const selectedRoomData = (annonceData, user, poster, roomInfo) => {
    setSelectedData(annonceData);
    setSelectedRoom(roomInfo);
    setSelectedRoomUser(user);
    setSelectedRoomPoster(poster);
    setRoomInfo(roomInfo);
  };

  useEffect(() => {
    if (roomInfo) {
      axios
        .get(
          `https://deeel-v0-test.onrender.com/api/message/${roomInfo.uniqueID}`
        )
        .then((res) => {
          setMessages(res.data);
        });
    }
  }, [roomInfo]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const roomID = await roomsData.find(
      (el) => el.uniqueID === roomInfo.uniqueID
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
        roomID: roomID.uniqueID,
        senderID: uid,
        recipientID: recipient,
        text: newMessage,
        _id: Date.now(),
      },
    ]);
    setNewMessage("");
  };

  useEffect(() => {
    const ws = new WebSocket("wss://deeel-v0-test.onrender.com");
    setWs(ws);
    ws.addEventListener("message", handleMessage);
    ws.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected. Trying to reconnect");
        connectToWs();
      }, 1000);
    });
  }, [selectedRoom]);

  function connectToWs() {
    const ws = new WebSocket("wss://deeel-v0-test.onrender.com");
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
    if ("online" in messageData) {
      showOnlinePeople(messageData.online);
    } else if ("text" in messageData) {
      console.log(messageData);
      setMessages((prev) => [
        ...prev,
        {
          ...messageData,
        },
      ]);
    } else if ("price" in messageData) {
      setOffer(messageData);
      console.log(messageData);
    }
  }

  const closeOfferForm = () => {
    setOpenOffer(false);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handlePayment = () => {
    setOpenPayement(true);
  };

  const closePayement = () => {
    setOpenPayement(false);
    setPaymentSuccessfully(true);
  };

  const messagesWithoutDupes = uniqBy(messages, "_id");

  return (
    <>
      {uid && (
        <div className="popup-discuss">
          <div className="modal chatpage">
            <div className="close-conv">
              <img
                src="./traverser.svg"
                alt="close"
                onClick={() => closeDiscussions()}
              />
            </div>
            <div className="conversation-container">
              <div className="left-container " style={{ padding: "0" }}>
                {roomsData[0] &&
                  roomsData.map((room) => {
                    if (room.posterID === uid || room.userID === uid) {
                      return (
                        <InfoRoom
                          roomInfo={room}
                          usersData={usersData}
                          annoncesData={annoncesData}
                          uid={uid}
                          selectedRoomData={selectedRoomData}
                          selectedRoom={selectedRoom}
                          key={room._id}
                        />
                      );
                    } else return null;
                  })}
              </div>
              <div className="center-container">
                <div className="header-conv">
                  <div
                    className="chatter"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {!selectedData && <h3>⬅️ Choisissez une conversation</h3>}
                    <h3>{selectedData && upperCase(selectedData.title)}</h3>
                  </div>
                  <div className="offre-container">
                    {offerToDisplay && selectedData.posterID === uid ? (
                      offerToDisplay && offerToDisplay.statut === "open" ? (
                        <p className="etiquette">
                          Offre en cours{" "}
                          <span style={{ color: "#2ED47A" }}>
                            {offer && offer.price}
                          </span>{" "}
                          €
                        </p>
                      ) : null
                    ) : null}

                    {offer && selectedData.posterID === uid ? (
                      offerToDisplay && offerToDisplay.statut === "open" ? (
                        <button
                          className="btn-confirm"
                          onClick={() => handlePayment()}
                        >
                          Accepter l'offre
                        </button>
                      ) : null
                    ) : null}

                    {/* {roomInfo && uid === roomInfo.userID && price !== 0 ? (
                      <p className="etiquette">
                        Offre en cours{" "}
                        <span style={{ color: "#2ED47A" }}>
                          {price && (price * 1.2).toFixed(2)}
                        </span>{" "}
                        €
                      </p>
                    ) : null} */}

                    {/* {offer && uid === roomInfo.userID ? (
                        <p>
                          Offre en cours{" "}
                          <span style={{ color: "#2ED47A" }}>
                            {offer && offer.price}
                          </span>{" "}
                          €
                        </p>
                      ) : null} */}
                  </div>

                  {offer && uid === roomInfo.userID ? (
                    offerToDisplay != null &&
                    offerToDisplay.statut !== "closed" ? (
                      <p className="etiquette">
                        Offre en cours{" "}
                        <span style={{ color: "#2ED47A" }}>
                          {offer && offer.price}
                        </span>{" "}
                        €
                      </p>
                    ) : null
                  ) : null}

                  {offerToDisplay != null &&
                  offerToDisplay.statut === "closed" ? (
                    <div className="offre-container">
                      {offer && selectedData.posterID === uid ? (
                        <p className="etiquette-accepted">
                          Offre acceptée à <span>{offerToDisplay.price}</span> €
                        </p>
                      ) : null}
                      {/* {roomInfo && uid === roomInfo.userID && price !== 0 ? (
                        <p className="etiquette-accepted">
                          Offre acceptée à <span>{offerToDisplay.price}</span> €
                        </p>
                      ) : null} */}
                      {offer && uid === roomInfo.userID ? (
                        <p className="etiquette-accepted">
                          Offre acceptée à <span>{offerToDisplay.price}</span> €
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  {offerToDisplay != null &&
                  offerToDisplay.statut === "closed" ? null : roomInfo &&
                    uid === roomInfo.userID ? (
                    <div
                      className="cta-propal"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <button
                        style={{ margin: "0 1rem 0 0" }}
                        onClick={() => setOpenOffer(true)}
                      >
                        {offer
                          ? "Faire une nouvelle proposition"
                          : "Faire une proposition"}
                      </button>{" "}
                    </div>
                  ) : null}
                </div>
                {messagesWithoutDupes ? (
                  <div className="content-conv">
                    {!!roomInfo && (
                      <Messages
                        messages={messagesWithoutDupes}
                        roomInfo={roomInfo}
                      />
                    )}
                  </div>
                ) : (
                  <div className="messages-container">
                    <i className="fas fa-spinner fa-spin loading"></i>
                    Chargement de la conversation
                  </div>
                )}
                <div className="message-input">
                  {selectedData && (
                    <form onSubmit={(e) => handleSendMessage(e)}>
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
                    </form>
                  )}
                </div>
              </div>
              <div className="right-container">
                {selectedRoomPoster && uid === selectedRoomPoster._id ? (
                  <Recipient recipient={selectedRoomUser} />
                ) : (
                  ""
                )}

                {selectedRoomUser && uid === selectedRoomUser._id ? (
                  <Recipient recipient={selectedRoomPoster} />
                ) : (
                  ""
                )}
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
          dataAnnonce={selectedData}
          handleMessage={handleMessage}
          ws={ws}
          handlePrice={handlePrice}
          price={price}
          setOffer={setOffer}
        />
      )}
      {openPayment && (
        <PopupPayment closePayement={closePayement} offer={offer} />
      )}
    </>
  );
};

export default PopupDiscussions;
