import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router";
import Loader from "../Pages/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to={"/login"} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
