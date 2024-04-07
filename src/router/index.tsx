import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { HOME_PAGE_PATH } from "@/constants";

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
        element: <Navigate to={HOME_PAGE_PATH} replace />,
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
          title: "看板",
        },
      },
      {
        path: "nested-menu",
        handle: {
          title: "嵌套菜单",
        },
        children: [
          {
            index: true,
            element: <Navigate to="/nested-menu/menu-1" replace />,
          },
          {
            path: "menu-1",
            Component: lazy(() => import("@/pages/nested-menu/menu-1")),
            handle: {
              title: "菜单-1",
            },
          },
          {
            path: "menu-2",
            Component: lazy(() => import("@/pages/nested-menu/menu-2")),
            handle: {
              title: "菜单-2",
            },
          },
        ],
      },
      {
        path: "about",
        Component: lazy(() => import("@/pages/about")),
        handle: {
          title: "关于",
        },
      },
      {
        path: "news",
        Component: lazy(() => import("@/pages/news")),
        handle: {
          title: "表格",
        },
      },
      {
        path: "profile",
        Component: lazy(() => import("@/pages/profile")),
        handle: {
          title: "个人中心",
          hideTab: true,
        },
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];

export const router = createBrowserRouter(routes, { basename: "/" });
