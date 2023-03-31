import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { calcLeadQuality, dateParser } from "../../utils";
import PercentFiability from "../utils/PercentFiability";
import { NavLink } from "react-router-dom";

const Lead = ({ lead, user }) => {
  const [unlock, setUnlock] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [isLoading]);

  const closePopup = () => {
    setIsLoading(true);
    setUnlock(!unlock);
  };

  return (
    <tr className="lead" key={lead._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <td>{lead._id.slice(lead._id.length - 4, lead._id.length)}</td>
          <td>{lead.lookingFor}</td>
          <td>
            <PercentFiability percent={calcLeadQuality(lead)} />
          </td>
          <td>{dateParser(lead.createdAt)}</td>
          <td>{lead?.buyer?.length}</td>
          <td>
            {lead?.isVerified === true ? (
              <img src="./verified.svg" alt="verified" />
            ) : (
              <img src="./interrogatoire.svg" alt="no-verified" />
            )}
          </td>
          <td>{dateParser(lead.updatedAt)}</td>
          <td>
            {user?.lead_bought?.find((el) => el === lead._id) ? (
              <NavLink to="/lead">
                <button className="btn-confirm">Voir le contact</button>
              </NavLink>
            ) : (
              <button onClick={() => closePopup()}>
                Débloquer contre 1 crédit
              </button>
            )}
          </td>
        </>
      )}
      {unlock ? <Popup lead={lead} closePopup={closePopup} /> : null}
    </tr>
  );
};

export default Lead;
