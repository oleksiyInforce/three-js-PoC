import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "components/Auth/AuthProvider";

export const UnaothorizedLayout: React.FC = () => {
  const { token } = useAuth();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};
