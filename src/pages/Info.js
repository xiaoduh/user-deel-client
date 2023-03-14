import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Plan from "../components/Store/Plan";

const Info = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          <Plan />
        </div>
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} />
        </div>
      )}
    </>
  );
};

export default Info;
