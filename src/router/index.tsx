import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "login",
    Component: lazy(() => import("@/pages/login")),
  },
  {
    path: "404",
    Component: lazy(() => import("@/pages/error/404")),
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
        handle: {
          title: "首页",
        },
      },
      {
        path: "dashboard",
        Component: lazy(() => import("@/pages/dashboard")),
        handle: {
          title: "Dashboard",
        },
      },
      {
        path: "demo",
        children: [
          {
            index: true,
            element: <Navigate to="/demo/level-1" replace />,
          },
          {
            path: "level-1",
            Component: lazy(() => import("@/pages/demo/level1")),
            handle: {
              title: "Level 1",
            },
          },
          {
            path: "level-2",
            Component: lazy(() => import("@/pages/demo/level2")),
            handle: {
              title: "Level 2",
            },
          },
        ],
      },
      {
        path: "profile",
        Component: lazy(() => import("@/pages/profile")),
        handle: {
          title: "个人中心",
        },
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
