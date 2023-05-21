import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import { useSelector } from "react-redux";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Plan from "../components/Store/Plan";

const Store = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
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
          <Log signin={true} signup={false} buyer={true} seller={false} />
        </div>
      )}
    </>
  );
};

export default Store;
