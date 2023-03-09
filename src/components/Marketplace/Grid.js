import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isEmpty, dateParser } from "../../utils";
import Lead from "./Lead";

const Grid = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const [isLoading, setIsLoading] = useState(true);

  const randomFiability = (max) => {
    Math.floor(Math.random() * max);
  };

  useEffect(() => {
    !isEmpty(leadsData) && setIsLoading(false);
  }, [leadsData]);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Contact</th>
            <th>Email</th>
            <th>Entreprise</th>
            <th>Recherche</th>
            <th>Fiabilité</th>
            <th>Ajouté le</th>
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
                    <td>
                      {lead.first_name} {lead.last_name}
                    </td>
                    <td>{lead.email}</td>
                    <td>{lead.company}</td>
                    <td>{lead.lookingFor}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{dateParser(lead.createdAt)}</td>
                    <td>
                      <button>Débloquer pour 1 crédit</button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </main>
  );
};

export default Grid;
