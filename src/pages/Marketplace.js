import React, { useContext, useEffect } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import GridBuyer from "../components/Marketplace/GridBuyer";
import ReactGA from "react-ga";

const Marketplace = () => {
  const uid = useContext(UidContext);
  // const userData = useSelector((state) => state.userReducer);
  // const dispatch = useDispatch();

  // const handleTwoFA = (user) => {
  //   dispatch(verifyNumber(user._id));
  // };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          <GridBuyer />
        </div>
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} />
        </div>
      )}
    </>
  );
};

export default Marketplace;
