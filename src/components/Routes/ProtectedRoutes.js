import React from "react";
import { Outlet } from "react-router-dom";
import TwoFA from "../twoFA/TwoFA";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const user = useSelector((state) => state.userReducer);
  return user.isAdmin ? <Outlet /> : "";
};

export default ProtectedRoutes;
