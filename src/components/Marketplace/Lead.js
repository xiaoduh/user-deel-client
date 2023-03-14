import React, { useState } from "react";
import Popup from "./Popup";
import { dateParser } from "../../utils";
import PercentFiability from "../utils/PercentFiability";

const Lead = ({ lead }) => {
  const [unlock, setUnlock] = useState(false);

  const closePopup = () => {
    setUnlock(!unlock);
  };

  return (
    <>
      <tr lead={lead} key={lead._id}>
        {" "}
        <td>{lead._id}</td>
        <td>{lead.company}</td>
        <td>
          <PercentFiability percent={Math.floor(Math.random() * 100)} />
        </td>
        <td>{dateParser(lead.createdAt)}</td>
        <td>{Math.floor(Math.random() * 1000)}</td>
        <td>
          <button onClick={setUnlock(!unlock)}>
            Débloquer contre 1 crédit
          </button>
        </td>
      </tr>
      {unlock && <Popup lead={lead} closePopup={closePopup} />}
    </>
  );
};

export default Lead;
