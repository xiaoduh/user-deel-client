import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TableLead from "../components/MyLeads/TableLead";

const MyLeads = ({ uidLogout }) => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header uidLogout={uidLogout} />
          <Sidebar />
          <TableLead />
        </div>
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} />
        </div>
      )}
    </>
  );
};

export default MyLeads;
