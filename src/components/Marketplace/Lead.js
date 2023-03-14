import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { dateParser, isEmpty } from "../../utils";
import PercentFiability from "../utils/PercentFiability";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Lead = ({ lead, user }) => {
  const [unlock, setUnlock] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const leadsData = useSelector((state) => state.leadsReducer);

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
          <td>{lead.company}</td>
          <td>
            <PercentFiability percent={Math.floor(Math.random() * 100)} />
          </td>
          <td>{dateParser(lead.createdAt)}</td>
          <td>{Math.floor(Math.random() * 1000)}</td>
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
