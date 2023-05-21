import React, { useContext, useEffect } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import GridSeller from "../components/Marketplace/GridSeller";
import ReactGA from "react-ga";

const Admin = () => {
  const uid = useContext(UidContext);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          <GridSeller />
        </div>
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} buyer={true} seller={false} />
        </div>
      )}
    </>
  );
};

export default Admin;
