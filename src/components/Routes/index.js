import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Info from "../../pages/Info";
import Help from "../../pages/Help";
import Marketplace from "../../pages/Marketplace";
import MyLeads from "../../pages/MyLeads";
import Store from "../../pages/Store";
import Payment from "../../pages/Payment";
import EmailVerificator from "../Log/EmailVerificator";
import ResetPW from "../ResetPW/ResetPW";

const index = ({ uidLogout }) => {
  return (
    <Router>
      <Routes>
        <Route uidLogout={uidLogout} path="/" exact element={<Marketplace />} />
        <Route uidLogout={uidLogout} path="/lead" exact element={<MyLeads />} />
        <Route uidLogout={uidLogout} path="/store" exact element={<Store />} />
        <Route uidLogout={uidLogout} path="/info" exact element={<Info />} />
        <Route uidLogout={uidLogout} path="/help" exact element={<Help />} />
        <Route
          uidLogout={uidLogout}
          path="/payment"
          exact
          element={<Payment />}
        />
        <Route path="/user/:id/verify/:token" element={<EmailVerificator />} />
        <Route
          path="/api/user/user-reset-password/:id/:token"
          exact
          element={<ResetPW />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default index;
