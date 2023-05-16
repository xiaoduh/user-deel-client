import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TableLead from "../components/MyLeads/TableLead";
import Sales from "../components/MyLeads/BusinessProvider";
import ReactGA from "react-ga";

const MyLeads = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          <Sales />
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
