import { Link, useMatches } from "react-router-dom";
import { Menu, MenuProps } from "antd";
import { last, toArray } from "@/utils";
import { SIDE_BAR_MENU_ITEMS } from "@/constants";

type MenuItem = Required<MenuProps>["items"][number];

const getItems = (menuItems: any, parentPath = ""): MenuItem[] => {
  return menuItems.map((item: any) => {
    const path = [parentPath, item.key].join("/");
    return {
      ...item,
      children: item.children ? getItems(item.children, path) : null,
      label: item.children ? item.label : <Link to={path}>{item.label}</Link>,
    };
  });
};

export default function SideMenu() {
  const matches = useMatches();

  const selectedKeys = matches.length > 0 ? toArray(last(matches).pathname) : [];

  return (
    <Menu
      items={getItems(SIDE_BAR_MENU_ITEMS)}
      theme="light"
      mode="inline"
      selectedKeys={selectedKeys}
      className="border-e-0"
    />
  );
}
