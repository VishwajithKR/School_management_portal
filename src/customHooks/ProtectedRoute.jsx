import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
 const userRole = useSelector((state)=>state.user.registerData[0].role)

  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/page not found" />;
};

export default ProtectedRoute;
