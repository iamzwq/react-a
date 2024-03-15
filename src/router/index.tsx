import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { routeConfig } from "./utils";

const routes: RouteObject[] = [
  {
    path: "login",
    Component: lazy(() => import("@/pages/login")),
  },
  {
    path: "/",
    Component: lazy(() => import("@/layouts/Layout")),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      ...routeConfig,
    ],
  },
  {
    path: "*",
    Component: lazy(() => import("@/pages/not-found")),
  },
];

export const router = createBrowserRouter(routes, { basename: "/" });
