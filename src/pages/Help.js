import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HelpForm from "../components/Help/HelpForm";

const Help = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          <HelpForm />
        </div>
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} />
        </div>
      )}
    </>
  );
};

export default Help;
