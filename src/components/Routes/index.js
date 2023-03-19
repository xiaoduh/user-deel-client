import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Info from "../../pages/Info";
import Marketplace from "../../pages/Marketplace";
import MyLeads from "../../pages/MyLeads";
import Store from "../../pages/Store";
import Payment from "../../pages/Payment";
import EmailVerificator from "../Log/EmailVerificator";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Marketplace />} />
        <Route path="/lead" exact element={<MyLeads />} />
        <Route path="/store" exact element={<Store />} />
        <Route path="/info" exact element={<Info />} />
        <Route path="/payment" exact element={<Payment />} />
        <Route path="/user/:id/verify/:token" element={<EmailVerificator />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default index;
