import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isEmpty, dateParser } from "../../utils";
import PercentFiability from "../utils/PercentFiability";
import Popup from "./Popup";

const Grid = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);

  const [unlock, setUnlock] = useState(false);
  const [leadBought, setLeadBought] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const closePopup = () => {
    setUnlock(!unlock);
  };

  const buyLead = (lead) => {
    setUnlock(!unlock);
    setLeadBought(lead);
  };

  useEffect(() => {
    !isEmpty(userData) && !isEmpty(leadsData) && setIsLoading(false);
  }, [userData, leadsData]);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Entreprise</th>
            <th>Fiabilité</th>
            <th>Ajouté le</th>
            <th>Nombre de vue</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!isEmpty(leadsData[0]) &&
            leadsData.map((lead) => {
              return (
                <>
                  <tr lead={lead} key={lead._id}>
                    {" "}
                    <td>{lead.company}</td>
                    <td>
                      <PercentFiability
                        percent={Math.floor(Math.random() * 100)}
                      />
                    </td>
                    <td>{dateParser(lead.createdAt)}</td>
                    <td>{Math.floor(Math.random() * 1000)}</td>
                    <td>
                      <button onClick={() => buyLead(lead)}>
                        Débloquer contre 1 crédit
                      </button>
                    </td>
                  </tr>
                  {unlock && (
                    <Popup lead={leadBought} closePopup={closePopup} />
                  )}
                </>
              );
            })}
        </tbody>
      </table>
    </main>
  );
};

export default Grid;
