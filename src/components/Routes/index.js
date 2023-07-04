import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import EmailVerificator from "../Log/EmailVerificator";
import ResetPW from "../ResetPW/ResetPW";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../../pages/Home";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes />}>
        </Route>
        <Route path="/" exact element={<Home />} />
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
