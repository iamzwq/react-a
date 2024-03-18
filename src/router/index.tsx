import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "login",
    Component: lazy(() => import("@/pages/login")),
  },
  {
    path: "404",
    Component: lazy(() => import("@/pages/404")),
  },
  {
    path: "/",
    Component: lazy(() => import("@/layouts/Layout")),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        Component: lazy(() => import("@/pages/home")),
      },
      // ...routeConfig,
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];

export const router = createBrowserRouter(routes, { basename: "/" });
