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
import Report from "../../pages/Report";
import ReactGA from "react-ga";

const index = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Marketplace />} />
        <Route path="/lead" exact element={<MyLeads />} />
        <Route path="/store" exact element={<Store />} />
        <Route path="/info" exact element={<Info />} />
        <Route path="/help" exact element={<Help />} />
        <Route path="/report" exact element={<Report />} />
        <Route path="/payment" exact element={<Payment />} />
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
