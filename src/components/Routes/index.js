import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Marketplace from "../../pages/Marketplace";
import MyLeads from "../../pages/MyLeads";
import Store from "../../pages/Store";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Marketplace />} />
        <Route path="/lead" exact element={<MyLeads />} />
        <Route path="/store" exact element={<Store />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default index;
