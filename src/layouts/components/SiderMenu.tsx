import { useMatches } from "react-router-dom";
import { Menu } from "antd";
import type { GetProp, MenuProps } from "antd";
import { last, toArray } from "@/utils";
import { SIDER_MENU_ITEMS, SiderMuenItemsProps } from "./MenuItems";

type MenuItem = GetProp<MenuProps, "items">[number];

export default function SiderMeun() {
  const matches = useMatches();

  const generateMenuItems = (menus: SiderMuenItemsProps[]): MenuItem[] => {
    return menus
      .filter(menu => menu.label)
      .map(menu => ({
        key: menu.path,
        label: menu.label,
        icon: menu.icon,
        children: menu.children ? generateMenuItems(menu.children) : null,
      }));
  };
  const menuItems = generateMenuItems(SIDER_MENU_ITEMS);

  const selectedKeys = matches.length > 0 ? toArray(last(matches).pathname) : [];

  return (
    <Menu
      items={menuItems}
      theme="light"
      mode="inline"
      selectedKeys={selectedKeys}
      className="border-e-0"
    />
  );
}
