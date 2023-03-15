import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import Lead from "./Lead";
import { getLeads } from "../../actions/leads.actions";
import PopupInfo from "./PopupInfo";
import PopupReliability from "./PopupReliability";

const Grid = () => {
  const leadsData = useSelector((state) => state.leadsReducer);
  const userData = useSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [popupInfo, setPopupInfo] = useState(false);
  const [infoReliability, setInfoReliability] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getLeads());
      setIsLoading(false);
    }
  }, [isLoading]);

  const closePopupInfo = () => {
    setPopupInfo(false);
  };

  const closePopupReliability = () => {
    setInfoReliability(false);
  };

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
              <th>
                Qualité{" "}
                <img src="/info.svg" onClick={() => setPopupInfo(true)} />
              </th>
              <th>Ajouté le</th>
              <th>Nombre de vue</th>
              <th>
                Fiabilité{" "}
                <img src="/info.svg" onClick={() => setInfoReliability(true)} />
              </th>
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
      {popupInfo ? <PopupInfo closePopupInfo={closePopupInfo} /> : null}
      {infoReliability ? (
        <PopupReliability closePopupReliability={closePopupReliability} />
      ) : null}
    </main>
  );
};

export default Grid;
