import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import { AuthPage } from "screens/Auth/Auth";
import { Home } from "screens/Home";
import { UnaothorizedLayout } from "./Unauthorized";

const RootRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/auth",
      element: <UnaothorizedLayout />,
      children: [
        {
          index: true,
          element: <AuthPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RootRouter;
