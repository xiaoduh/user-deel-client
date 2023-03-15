import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import Lead from "./Lead";
import { getLeads } from "../../actions/leads.actions";

const Grid = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getLeads());
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <main>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Entreprise</th>
              <th>Qualité</th>
              <th>Ajouté le</th>
              <th>Nombre de vue</th>
              <th>Fiabilité</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!isEmpty(leadsData[0]) &&
              leadsData.map((lead) => {
                return <Lead lead={lead} user={userData} key={lead} />;
              })}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default Grid;
