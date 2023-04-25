import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { dateParser, isEmpty, upperCase } from "../../utils";
import { NavLink } from "react-router-dom";

const Lead = ({ lead, user, users }) => {
  const [unlock, setUnlock] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let initialValue = 0;

  useEffect(() => {
    if (isLoading) {
      if (!isEmpty(lead) && !isEmpty(user) && !isEmpty(users)) {
        setIsLoading(false);
      }
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
          <td className="needs">{upperCase(lead.lookingFor)}</td>
          <td className="sector">{upperCase(lead.sector)}</td>
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
              <img src="./aide.svg" alt="no-verified" />
            )}
          </td>
          <td>
            {/* {lead.dealerID} */}
            {users
              .filter((el) => el._id.includes(lead.dealerID))
              .map(
                (el) =>
                  el.review.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    initialValue
                  ) / el.review.length
              )}{" "}
            / 5
          </td>
          <td>
            //a faire tester aussi si le lead n'est pas le sien auquel cas
            afficher boutton voir
            {user?.lead_bought?.find((el) => el === lead._id) ? (
              <NavLink to="/conversation">
                <button className="btn-confirm">Voir</button>
              </NavLink>
            ) : lead.buyer.length < 4 ? (
              <button onClick={() => closePopup()}>Contacter</button>
            ) : (
              <button className="btn-not-allowed">Fermée</button>
            )}
          </td>
        </>
      )}
      {unlock ? <Popup lead={lead} closePopup={closePopup} /> : null}
    </tr>
  );
};

export default Lead;
