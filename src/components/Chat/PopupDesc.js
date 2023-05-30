import React from "react";

const PopupDesc = ({ data, closePopup }) => {
  return (
    <div className="popup">
      <div className="modal">
        <p>{data.desc}</p>
        <button onClick={() => closePopup()}>Fermer</button>
      </div>
    </div>
  );
};

export default PopupDesc;
