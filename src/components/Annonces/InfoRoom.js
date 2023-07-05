import React, { useEffect, useState } from "react";
import { upperCase } from "../../utils";

const InfoRoom = ({
  roomInfo,
  usersData,
  annoncesData,
  uid,
  selectedRoomData,
  selectedRoom,
}) => {
  const [user, setUser] = useState(null);
  const [poster, setPoster] = useState(null);
  const [annonceData, setAnnonceData] = useState(null);

  useEffect(() => {
    const poster = usersData.find((el) => el._id === roomInfo.posterID);
    const user = usersData.find((el) => el._id === roomInfo.userID);
    const annonceData = annoncesData.find(
      (el) => el._id === roomInfo.annonceID
    );
    setUser(user);
    setPoster(poster);
    setAnnonceData(annonceData);
  }, [user, poster, annonceData, selectedRoom]);

  const selectRoom = (annonceData, user, poster, roomInfo) => {
    selectedRoomData(annonceData, user, poster, roomInfo);
  };

  return (
    <>
      {user && uid === roomInfo.posterID ? (
        <>
          <div
            className={
              "room-info-container-1" +
              (roomInfo.annonceID === annonceData?._id ? " selectedRoom-1" : "")
            }
            style={{ background: "#875af849", color: "#885AF8" }}
            onClick={() => selectRoom(annonceData, user, poster, roomInfo)}
          >
            {" "}
            <p className="emoji">🟣</p>
            <div className="info-recipient">
              <h3>En réponse à votre annonce : </h3>
              {annonceData && <p>{annonceData.title}</p>}
            </div>
          </div>
        </>
      ) : null}
      {poster && uid === roomInfo.userID ? (
        <>
          <div
            className={
              "room-info-container-2" +
              (roomInfo.annonceID === annonceData?._id ? " selectedRoom-2" : "")
            }
            onClick={() => selectRoom(annonceData, user, poster, roomInfo)}
          >
            <p className="emoji">🔵</p>
            <div className="info-recipient">
              <h3>Vous répondez à l'annonce : </h3>
              {annonceData && <p>{annonceData.title}</p>}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default InfoRoom;
