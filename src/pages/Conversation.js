import React, { useContext, useEffect } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ReactGA from "react-ga";
// import Chat from "../components/Chat/Chat";
import TableLead from "../components/MyLeads/TableLead";
// import { useSelector } from "react-redux";

const Conversation = () => {
  const uid = useContext(UidContext);
  // const convs = useSelector((state) => state.convsReducer);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          {/* <Chat convs={convs} /> */}
          <TableLead />
        </div>
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} buyer={true} seller={false} />
        </div>
      )}
    </>
  );
};

export default Conversation;
