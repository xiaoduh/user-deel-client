import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import { useSelector } from "react-redux";
import PopupDesc from "./PopupDesc";

const ChatRoomHeader = ({ selectedConv, messages }) => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const convs = useSelector((state) => state.convsReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [conv, setConv] = useState(null);
  const [data, setData] = useState(null);
  const [popupDesc, setPopupDesc] = useState(false);
  const uid = useContext(UidContext);

  useEffect(() => {
    const fetchDataConv = async () => {
      const found = await convs.find((element) => element._id === selectedConv);
      setConv(found);
      const foundLeadData = await leadsData.find(
        (element) => element._id === found.leadID
      );
      setData(foundLeadData);
      setIsLoading(false);
    };
    fetchDataConv();
  }, [isLoading, leadsData, convs, selectedConv, messages]);

  const openPopDesc = () => {
    setPopupDesc(!popupDesc);
  };

  const closePopup = () => {
    setPopupDesc(!popupDesc);
  };

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        // <div className="loading">
        //   <p>Veuillez selectionner une conversation 💬</p>
        // </div>
        <>
          <div className="chat-room-header">
            <div className="info-job">
              <h4> 👩‍💻 {data.lookingFor}</h4>
              <p> 🏭 {data.company}</p>
              <p>📍 {data.region}</p>
              <p>🎓 {data.skills}</p>
              <p>
                📑
                {data.desc ? (
                  <button
                    style={{ fontSize: ".6rem", marginLeft: "1rem" }}
                    onClick={() => openPopDesc()}
                  >
                    Voir la fiche de poste
                  </button>
                ) : (
                  " Pas description disponible"
                )}
              </p>
            </div>
            <div className="info-contact">
              <h4>🎯 Contact</h4>
              <p>
                😶 {data.first_name} {data.last_name}
              </p>
              <p>💼 {data.role}</p>
              <p>📧 {data.email ? data.email : "email inconnu"}</p>
              <p>☎️ {data.phone ? data.phone : "Téléphone inconnu"}</p>
            </div>
          </div>
        </>
      )}
      {popupDesc ? <PopupDesc data={data} closePopup={closePopup} /> : null}
    </>
  );
};

export default ChatRoomHeader;
