import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import { useSelector } from "react-redux";
import ConversationThumbnail from "./ConversationThumbnail";
import ChatRoomHeader from "./ChatRoomHeader";
import Messages from "./Messages";
import { uniqBy } from "lodash";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Chat = ({ convs, buyer, seller }) => {
  const user = useSelector((state) => state.userReducer);
  const leadsData = useSelector((state) => state.leadsReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [ws, setWs] = useState(null);
  const [onlinePeople, setOnlinePeople] = useState([]);
  const [sellerModal, setSellerModal] = useState(seller);
  const [buyerModal, setBuyerModal] = useState(buyer);
  const [selectedConv, setSelectedConv] = useState(null);
  const [textToSend, setTextToSend] = useState("");
  const [messages, setMessages] = useState([]);
  const [recipient, setRecipient] = useState(null);
  const uid = useContext(UidContext);

  useEffect(() => {
    console.log(user.lead_bought);
    leadsData[0] && setIsLoading(false);
    const ws = new WebSocket("ws://localhost:5000");
    setWs(ws);
    ws.addEventListener("message", handleMessage);
    ws.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected. Trying to reconnect");
        connectToWs();
      }, 1000);
    });
  }, [isLoading, leadsData, selectedConv]);

  function connectToWs() {
    const ws = new WebSocket("ws://localhost:5000");
    setWs(ws);
  }

  useEffect(() => {
    if (selectedConv) {
      axios
        .get(`http://localhost:5000/api/message/${selectedConv}`)
        .then((res) => {
          setMessages(res.data);
        });
    }
  }, [selectedConv]);

  // supprimer les duplicate connexion pouor n'avoir qu'une unique connexion by userId
  function showOnlinePeople(peopleArray) {
    const people = {};
    peopleArray.forEach(({ userId }) => {
      if (userId !== undefined) people[userId] = userId;
    });
    setOnlinePeople(people);
  }

  // interceper les messages et les router selon le type
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
    }
  }

  const handleModals = (e) => {
    if (e.target.id === "seller") {
      setSellerModal(true);
      setBuyerModal(false);
    } else if (e.target.id === "buyer") {
      setSellerModal(false);
      setBuyerModal(true);
    }
  };

  const findConv = async (e, convId) => {
    setTextToSend(e.target.value);
    const conv = await convs.find((el) => el._id === convId);
    if (user._id == conv.userID) {
      setRecipient(conv.dealerID);
    } else {
      setRecipient(conv.userID);
    }
    console.log(recipient);
  };

  const selectedChat = (convId) => {
    setSelectedConv(convId);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    ws.send(
      JSON.stringify({
        message: {
          convId: selectedConv,
          sender: user._id,
          recipient: recipient,
          text: textToSend,
        },
      })
    );
    setMessages((prev) => [
      ...prev,
      {
        text: textToSend,
        convID: selectedConv,
        senderID: uid,
        recipientID: recipient,
        _id: Date.now(),
      },
    ]);
    setTextToSend("");
  };

  const messagesWithoutDuplicate = uniqBy(messages, "_id");

  return (
    <>
      <div className="title-container">
        <h3 style={{ fontSize: "1.5rem" }}>Conversations anonymes</h3>
      </div>
      <main
        className="conversation-container"
        style={{ overflowY: "hidden", top: "80px", height: "90%" }}
      >
        {isLoading ? (
          <i className="fas fa-spinner fa-spin loading"></i>
        ) : (
          <div className="chat-container">
            <div className="conversation-list">
              <div className="conversation-header">
                <ul style={{ marginBottom: "2rem" }}>
                  <li
                    id="buyer"
                    onClick={handleModals}
                    className={buyerModal ? "active-btn" : null}
                  >
                    Avec mes apporteurs 🕵️‍♂️
                  </li>
                  <li
                    id="seller"
                    onClick={handleModals}
                    className={sellerModal ? "active-btn" : null}
                  >
                    Avec mes clients 🛒
                  </li>
                </ul>
              </div>
              {user.lead_bought[0] ? (
                ""
              ) : (
                <div>
                  <p style={{ display: "flex", margin: "0 auto" }}>
                    🟠 Vous n'avez aucune conversation.<br></br>
                  </p>
                  <NavLink to="/">
                    <button>Parcourir les annonces d'apports d'affaires</button>
                  </NavLink>
                </div>
              )}
              {sellerModal &&
                Array.isArray(convs) &&
                convs.map((conv) => {
                  {
                    if (conv.dealerID === user._id) {
                      return (
                        <ConversationThumbnail
                          key={conv._id}
                          conv={conv}
                          leadsData={leadsData}
                          selectedChat={selectedChat}
                          selectedConv={selectedConv}
                        />
                      );
                    } else return null;
                  }
                })}
              {buyerModal &&
                Array.isArray(convs) &&
                convs.map((conv) => {
                  if (conv.userID === user._id) {
                    return (
                      <ConversationThumbnail
                        key={conv._id}
                        conv={conv}
                        leadsData={leadsData}
                        selectedChat={selectedChat}
                        selectedConv={selectedConv}
                      />
                    );
                  } else return null;
                })}
            </div>
            <div className="chat-room">
              {!!selectedConv ? (
                <>
                  <ChatRoomHeader selectedConv={selectedConv} />
                  <Messages
                    messages={messagesWithoutDuplicate}
                    buyerModal={buyerModal}
                    sellerModal={sellerModal}
                  />
                </>
              ) : (
                <div className="messages-display-container">
                  <div className="loading">
                    <p>Selectionnez une conversation 💬</p>
                  </div>
                </div>
              )}
              {!!selectedConv && (
                <form
                  className="input-message"
                  onSubmit={(e) => handleSendMessage(e)}
                >
                  {" "}
                  <input
                    type="text"
                    value={textToSend}
                    onChange={(e) => findConv(e, selectedConv)}
                  />
                  <button type="submit">Envoyer</button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Chat;
