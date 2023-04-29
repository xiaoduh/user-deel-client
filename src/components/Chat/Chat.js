import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ConversationThumbnail from "./ConversationThumbnail";

const Chat = () => {
  const user = useSelector((state) => state.userReducer);
  const leadsData = useSelector((state) => state.leadsReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const data = [];

  // const selectLead = () => {
  //   Array.isArray(user.lead_bought) &&
  //     user.lead_bought.map((id) => {
  //       for (let i = 0; i < leadsData.length; i++) {
  //         if (id === leadsData[i]._id) {
  //           // data.push(leadsData[i]);
  //         }
  //       }
  //     });
  //   // console.log(data[0]);
  // };

  // useEffect(() => {
  //   leadsData && selectLead();
  // }, [leadsData]);

  return (
    <main className="conversation-container">
      <div className="title-container">
        <h3 style={{ fontSize: "1.5rem" }}>Mes mises en relation</h3>
        <p>
          Ici, échangez en tout anonymat avec{" "}
          {user && user.isSales
            ? "vos apporteurs d'affaires."
            : "vos acheteurs."}
          <div className="chat-container">
            <div className="conversation-list">
              <div className="conversation-header">
                <h4>Mes sujets de conversations</h4>
              </div>
              {Array.isArray(user.lead_bought) &&
                user.lead_bought
                  .sort((a, b) => {
                    return b.createdAt - a.createdAt;
                  })
                  .map((id) => {
                    for (let i = 0; i < leadsData.length; i++) {
                      if (id === leadsData[i]._id) {
                        return (
                          <ConversationThumbnail
                            key={leadsData[i]._id}
                            leadData={leadsData[i]}
                          />
                        );
                      }
                    }
                  })}
            </div>
            <div className="chat-room">
              <div className="messanges-container">messages</div>
              <div className="input-message">
                {" "}
                <input type="text" />
                <button>Envoyer</button>
              </div>
            </div>
          </div>
        </p>
      </div>
    </main>
  );
};

export default Chat;
