import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { dateParser } from "../../utils";
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
          <td className="disable">
            {lead._id.slice(lead._id.length - 4, lead._id.length)}
          </td>
          <td className="needs">{lead.lookingFor}</td>
          <td className="needs">{lead.skills}</td>
          <td className="sector">{lead.sector}</td>
          <td className="sector">{lead.region}</td>
          <td>
            {lead.company !== "" ? (
              <img src="./known.svg" alt="known" />
            ) : (
              <img src="./unknown.svg" alt="unknown" />
            )}
          </td>
          <td>
            {lead.first_name && lead.last_name !== "" ? (
              <img src="./known.svg" alt="known" />
            ) : (
              <img src="./unknown.svg" alt="unknown" />
            )}
          </td>
          <td>
            {lead.email !== "" ? (
              <img src="./known.svg" alt="known" />
            ) : (
              <img src="./unknown.svg" alt="unknown" />
            )}
          </td>
          <td>
            {lead.phone !== "" ? (
              <img src="./known.svg" alt="known" />
            ) : (
              <img src="./unknown.svg" alt="unknown" />
            )}
          </td>
          <td>
            {lead.isOpen == true ? (
              <p style={{ color: "#2ED47A", fontWeight: "bold" }}>Ouvert</p>
            ) : (
              <p style={{ color: "#FFB946", fontWeight: "bold" }}>?</p>
            )}
          </td>
          <td className="disable">{dateParser(lead.createdAt)}</td>
          <td>{lead?.buyer?.length} / 4</td>
          <td>
            {lead?.isVerified === true ? (
              <img src="./verified.svg" alt="verified" />
            ) : (
              <img src="./interrogatoire.svg" alt="no-verified" />
            )}
          </td>
          <td>
            {user?.lead_bought?.find((el) => el === lead._id) ? (
              <NavLink to="/lead">
                <button className="btn-confirm">Voir le besoin</button>
              </NavLink>
            ) : lead.buyer.length < 4 ? (
              <button onClick={() => closePopup()}>Débloquer le besoin</button>
            ) : (
              <button className="btn-not-allowed">Vente terminée</button>
            )}
          </td>
        </>
      )}
      {unlock ? <Popup lead={lead} closePopup={closePopup} /> : null}
    </tr>
  );
};

export default Lead;
