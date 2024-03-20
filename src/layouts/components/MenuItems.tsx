import { Link } from "react-router-dom";
import Icon, { HomeOutlined, UserOutlined } from "@ant-design/icons";
import errorMenuSvg from "@/assets/svgs/errorMenuSvg";

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
    icon: <UserOutlined />,
  },
  {
    label: "Error",
    path: "/error",
    icon: <Icon component={errorMenuSvg} />,
    children: [
      {
        label: <Link to="/404">404 Page</Link>,
        path: "/404",
      },
    ],
  },
];
