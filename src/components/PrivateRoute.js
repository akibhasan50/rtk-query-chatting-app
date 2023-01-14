import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedin = useAuth();

  return isLoggedin ? children : <Navigate to="/"></Navigate>;
}
