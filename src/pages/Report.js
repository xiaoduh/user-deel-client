import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HelpForm from "../components/Help/HelpForm";

const Report = () => {
  const uid = useContext(UidContext);
  const title = "Vous avez acheté un contact obsolete ?";
  const p =
    "Demandez le remboursement de votre crédit. Vous devrez apporter la preuve que le poste/besoin/mission n'est plus d'actualité(e).";
  const subject = "de remboursement";
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

export default Report;
