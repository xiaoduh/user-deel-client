import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import Lead from "./Lead";

const Grid = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    !isEmpty(userData) && !isEmpty(leadsData) && setIsLoading(false);
  }, [userData, leadsData]);

  return (
    <main>
      {isLoading ? (
        <>loading</>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
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
                return <Lead lead={lead} />;
              })}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default Grid;
