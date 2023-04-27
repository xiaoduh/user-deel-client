import React from "react";
import { Outlet } from "react-router-dom";
import TwoFA from "../twoFA/TwoFA";

const user2FA = () => {
  const user = { twoFA: false };
  return user && user.twoFA;
};

const ProtectedRoutes = () => {
  const isTFA = user2FA();
  return isTFA ? <Outlet /> : <TwoFA />;
};

export default ProtectedRoutes;
