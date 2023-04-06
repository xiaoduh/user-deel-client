import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HelpForm from "../components/Help/HelpForm";

const Help = () => {
  const uid = useContext(UidContext);
  const title =
    "Vous faites face à des difficultés d'utilisation ou à un problème ?";
  const p =
    "Contactez-nous et nous prendre contacte avec vous dans les plus bref délais.";
  const subject = "d'assictance";

  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          <HelpForm title={title} p={p} subject={subject} />
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
