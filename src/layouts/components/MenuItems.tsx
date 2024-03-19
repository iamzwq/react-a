import { Link } from "react-router-dom";
import { HeartOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";

export interface SiderMuenItemsProps {
  label: React.ReactNode;
  path: string;
  icon?: React.ReactNode;
  children?: SiderMuenItemsProps[];
}

export const SIDER_MENU_ITEMS: SiderMuenItemsProps[] = [
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
    icon: <HeartOutlined />,
    children: [
      {
        label: <Link to="/404">404 Page</Link>,
        path: "/404",
      },
    ],
  },
];
