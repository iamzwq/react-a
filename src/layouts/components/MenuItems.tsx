import { Link } from "react-router-dom";
import { DashboardOutlined, FireOutlined, HomeOutlined } from "@ant-design/icons";
import AlertTriangleIcon from "@/assets/icons/AlertTriangleIcon";
import BirdIcon from "@/assets/icons/BirdIcon";
import NewsIcon from "@/assets/icons/NewsIcon";

export interface SideMenuItemsProps {
  label: React.ReactNode;
  path: string;
  icon?: React.ReactNode;
  children?: SideMenuItemsProps[];
}

export const SIDE_MENU_ITEMS: SideMenuItemsProps[] = [
  {
    label: <Link to="/home">首页</Link>,
    path: "/home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/dashboard">Dashboard</Link>,
    path: "/dashboard",
    icon: <DashboardOutlined />,
  },
  {
    label: "Demo",
    path: "/demo",
    icon: <FireOutlined />,
    children: [
      {
        label: <Link to="/demo/level-1">level-1</Link>,
        path: "/demo/level-1",
      },
      {
        label: <Link to="/demo/level-2">level-2</Link>,
        path: "/demo/level-2",
      },
    ],
  },
  {
    label: "Error",
    path: "/error",
    icon: <AlertTriangleIcon />,
    children: [
      {
        label: <Link to="/404">404 Page</Link>,
        path: "/404",
      },
    ],
  },
  {
    label: "关于",
    path: "/about",
    icon: <BirdIcon />,
  },
  {
    label: "新闻",
    path: "/news",
    icon: <NewsIcon />,
  },
  {
    label: "功能模块1",
    path: "/nav-1",
    icon: <NewsIcon />,
  },
  {
    label: "功能模块2",
    path: "/nav-2",
    icon: <NewsIcon />,
  },
  {
    label: "功能模块3",
    path: "/nav-3",
    icon: <NewsIcon />,
  },
  {
    label: "功能模块4",
    path: "/nav-4",
    icon: <NewsIcon />,
  },
];
