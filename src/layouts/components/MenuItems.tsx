import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

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
    // children: [
    //   {
    //     label: <Link to="/frontendvue">vue</Link>,
    //     path: "/frontend/vue",
    //   },
    //   {
    //     label: <Link to="/frontend/react">react</Link>,
    //     path: "/frontend/react",
    //   },
    // ],
  },
];
