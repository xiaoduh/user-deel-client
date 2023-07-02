import React from "react";
import Log from "../Log";

const PopupIsLogged = ({ closeIsLogged }) => {
  return (
    <div className="popup">
      <div className="modal">
        <div className="close-conv">
          <img
            src="./traverser.svg"
            alt="close"
            onClick={() => closeIsLogged()}
          />
        </div>
        <Log signin={true} signup={false} fromPopupIsLogged={true} />
      </div>
    </div>
  );
};

export default PopupIsLogged;
