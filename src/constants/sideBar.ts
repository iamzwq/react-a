import { createElement } from "react";
import { AppstoreOutlined, DashboardOutlined, HomeOutlined } from "@ant-design/icons";
import AboutMenuIcon from "@/assets/icons/AboutMenuIcon";
import AlertTriangleIcon from "@/assets/icons/AlertTriangleIcon";
import NewsIcon from "@/assets/icons/NewsIcon";

export const SIDE_BAR_MENU_ITEMS = [
  {
    label: "首页",
    key: "home",
    icon: createElement(HomeOutlined),
  },
  {
    label: "Dashboard",
    key: "dashboard",
    icon: createElement(DashboardOutlined),
  },
  {
    label: "嵌套菜单",
    key: "nested-menu",
    icon: createElement(AppstoreOutlined),
    children: [
      {
        label: "Menu-1",
        key: "menu-1",
      },
      {
        label: "Menu-2",
        key: "menu-2",
      },
    ],
  },
  {
    label: "错误页",
    key: "error",
    icon: createElement(AlertTriangleIcon),
    children: [
      {
        label: "404",
        key: "404",
      },
    ],
  },
  {
    label: "关于",
    key: "about",
    icon: createElement(AboutMenuIcon),
  },
  {
    label: "表格",
    key: "news",
    icon: createElement(NewsIcon),
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
  },
  {
    label: "功能模块3",
    key: "feature3",
    icon: createElement(NewsIcon),
  },
  {
    label: "功能模块4",
    key: "feature4",
    icon: createElement(NewsIcon),
  },
];

// const pageModules = import.meta.glob([
//   "/src/pages/**/index.tsx",
//   "!**/(login|error)/*.tsx",
// ]);
// export const menuItemsToRoutes = (menuItems: any, parentPath = ""): RouteObject[] => {
//   return menuItems.map((item: any) => {
//     const path = [parentPath, item.key].join("/");
//     const filepath = "/src/pages" + path + "/index.tsx";
//     return {
//       path: item.key,
//       // @ts-ignore
//       Component: pageModules[filepath] ? lazy(pageModules[filepath]) : undefined,
//       handle: item.handle,
//       children: item.children ? menuItemsToRoutes(item.children, path) : undefined,
//     };
//   });
// };
