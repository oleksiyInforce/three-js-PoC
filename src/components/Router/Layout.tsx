import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { useAuth } from "components/Auth/AuthProvider";

export const Layout: React.FC = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/auth" />;
  }

  return (
    <main>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};
