import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ReactGA from "react-ga";
import Chat from "../components/Chat/Chat";
import { useSelector } from "react-redux";

const Message = () => {
  const uid = useContext(UidContext);
  const convs = useSelector((state) => state.convsReducer);
  const user = useSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    user.user_type && setIsLoading(false);
  }, [user]);

  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          {isLoading ? (
            <i className="fas fa-spinner fa-spin loading"></i>
          ) : (
            <Chat
              convs={convs}
              seller={user.user_type === "business_provider" ? true : false}
              buyer={user.user_type === "sales" ? true : false}
            />
          )}
        </div>
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} />
        </div>
      )}
    </>
  );
};

export default Message;
