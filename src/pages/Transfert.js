import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import { useSelector } from "react-redux";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ConvertCredit from "../components/Store/ConvertCredit";

const Transfert = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          <ConvertCredit />
        </div>
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} />
        </div>
      )}
    </>
  );
};

export default Transfert;
