import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { dateParser, isEmpty } from "../../utils";
import PercentFiability from "../utils/PercentFiability";
import { useSelector } from "react-redux";

const Lead = ({ lead }) => {
  const [unlock, setUnlock] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    !isEmpty(leadsData[0]) && setIsLoading(false);
  }, [leadsData]);

  const closePopup = () => {
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
            <button onClick={() => setUnlock(!unlock)}>
              Débloquer contre 1 crédit
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default Lead;
