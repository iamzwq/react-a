import { Link, useMatches } from "react-router-dom";
import { Menu } from "antd";
import { Icon } from "@iconify/react";
import type { GetProp, MenuProps } from "antd";

interface SiderBarMuenItemsProps {
  label: React.ReactNode;
  path: string;
  icon?: React.ReactNode;
  children?: SiderBarMuenItemsProps[];
}

type MenuItem = GetProp<MenuProps, "items">[number];

export const SIDER_BAR_MENU: SiderBarMuenItemsProps[] = [
  {
    label: <Link to="/home">首页</Link>,
    path: "/home",
    icon: <Icon icon="ant-design:home-outlined" width={16} />,
  },
  {
    label: "用户管理",
    path: "/frontend",
    icon: <Icon icon="ant-design:user-outlined" width={16} />,
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
  {
    label: <Link to="/frontend-vue">Vue</Link>,
    path: "/frontend-vue",
    icon: <Icon icon="devicon:vuejs" width={16} />,
  },
];

export default function SiderBarMeun() {
  const matches = useMatches();

  const generateMenuItems = (menus: SiderBarMuenItemsProps[]): MenuItem[] => {
    return menus
      .filter(menu => menu.label)
      .map(menu => ({
        key: menu.path,
        label: menu.label,
        icon: menu.icon,
        children: menu.children ? generateMenuItems(menu.children) : null,
      }));
  };
  const menuItems = generateMenuItems(SIDER_BAR_MENU);

  const selectedKeys = matches.length > 0 ? [matches.at(-1)?.pathname || ""] : [];

  return (
    <Menu
      items={menuItems}
      theme="light"
      mode="inline"
      defaultSelectedKeys={selectedKeys}
    />
  );
}
