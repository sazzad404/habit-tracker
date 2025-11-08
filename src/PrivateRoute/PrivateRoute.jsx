import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  if (!user) {
    return <Navigate to={"/login"} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
