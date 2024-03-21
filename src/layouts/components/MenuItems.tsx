import { Link } from "react-router-dom";
import { HomeOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import AlertTriangleIcon from "@/assets/icons/AlertTriangleIcon";

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
    label: <Link to="/users">用户管理</Link>,
    path: "/users",
    icon: <UsergroupAddOutlined />,
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
];
