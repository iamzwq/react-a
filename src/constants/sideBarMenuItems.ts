import { createElement, lazy } from "react";
import { RouteObject } from "react-router-dom";
import { AppstoreOutlined, DashboardOutlined, HomeOutlined } from "@ant-design/icons";
import AboutMenuIcon from "@/assets/icons/AboutMenuIcon";
import AlertTriangleIcon from "@/assets/icons/AlertTriangleIcon";
import NewsIcon from "@/assets/icons/NewsIcon";

/**
 * 侧边栏菜单项
 * @type {Array}
 * @property {string} label 菜单项名称
 * @property {string} key 菜单项唯一标识，由于用这个映射路由path，所以必须是路由文件夹名称
 * @property {ReactNode} icon 菜单项图标
 * @property {Array} children 子菜单项
 * @property {Object} handle router的handle属性
 */
export const SIDE_BAR_MENU_ITEMS = [
  {
    label: "首页",
    key: "home",
    icon: createElement(HomeOutlined),
    handle: {
      title: "首页",
    },
  },
  {
    label: "Dashboard",
    key: "dashboard",
    icon: createElement(DashboardOutlined),
    handle: {
      title: "Dashboard",
    },
  },
  {
    label: "Demo",
    key: "demo",
    icon: createElement(AppstoreOutlined),
    handle: {
      title: "Demo",
    },
    children: [
      {
        label: "Level 1",
        key: "level-1",
        handle: {
          title: "Level-1",
        },
      },
      {
        label: "Level 2",
        key: "level-2",
        handle: {
          title: "Level-2",
        },
      },
    ],
  },
  {
    label: "错误页",
    key: "error",
    icon: createElement(AlertTriangleIcon),
    handle: {
      title: "错误页",
    },
    children: [
      {
        label: "404",
        key: "404",
        handle: {
          title: "404",
        },
      },
    ],
  },
  {
    label: "关于",
    key: "about",
    icon: createElement(AboutMenuIcon),
    handle: {
      title: "关于",
    },
  },
  {
    label: "表格",
    key: "news",
    icon: createElement(NewsIcon),
    handle: {
      title: "关于",
    },
  },
  {
    label: "功能模块1",
    key: "feature1",
    icon: createElement(NewsIcon),
    handle: {
      title: "功能模块1",
    },
  },
  {
    label: "功能模块2",
    key: "feature2",
    icon: createElement(NewsIcon),
    handle: {
      title: "功能模块2",
    },
  },
  {
    label: "功能模块3",
    key: "feature3",
    icon: createElement(NewsIcon),
    handle: {
      title: "功能模块3",
    },
  },
  {
    label: "功能模块4",
    key: "feature4",
    icon: createElement(NewsIcon),
    handle: {
      title: "功能模块4",
    },
  },
];

const pageModules = import.meta.glob([
  "/src/pages/**/index.tsx",
  "!**/(login|error)/*.tsx",
]);
export const menuItemsToRoutes = (menuItems: any, parentPath = ""): RouteObject[] => {
  return menuItems.map((item: any) => {
    const path = [parentPath, item.key].join("/");
    const filepath = "/src/pages" + path + "/index.tsx";
    return {
      path: item.key,
      // @ts-ignore
      Component: pageModules[filepath] ? lazy(pageModules[filepath]) : undefined,
      handle: item.handle,
      children: item.children ? menuItemsToRoutes(item.children, path) : undefined,
    };
  });
};
