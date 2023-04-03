import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import { useSelector, useDispatch } from "react-redux";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Grid from "../components/Marketplace/Grid";
import TwoFA from "../components/twoFA/TwoFA";
import { verifyNumber } from "../actions/user.actions";

const Marketplace = ({ uidLogout }) => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleTwoFA = (user) => {
    dispatch(verifyNumber(user._id));
  };

  return (
    <>
      {uid ? (
        userData.twoFA ? (
          <div className="logged-user">
            <Header />
            <Sidebar />
            <Grid />
          </div>
        ) : (
          <TwoFA handleTwoFA={handleTwoFA} userData={userData} />
        )
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} />
        </div>
      )}
    </>
  );
};

export default Marketplace;
