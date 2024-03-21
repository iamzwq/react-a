import { Link } from "react-router-dom";
import { Avatar, Badge, Button, Dropdown, type MenuProps } from "antd";
import {
  BellOutlined,
  LogoutOutlined,
  MoonOutlined,
  SettingOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { setThemeMode, useSettingStore } from "@/stores";
import FullscreenButton from "./components/FullscreenButton";
import { ThemeMode } from "@/typings/public";

const items: MenuProps["items"] = [
  {
    key: "profile",
    label: (
      <Link to="/profile">
        <UserOutlined /> &nbsp; 个人中心
      </Link>
    ),
  },
  {
    key: "logout",
    label: (
      <Link to="/login">
        <LogoutOutlined /> &nbsp; 退出登录
      </Link>
    ),
  },
];

export default function Header() {
  const themeMode = useSettingStore(state => state.themeMode);
  const isDarkMode = themeMode === ThemeMode.Dark;

  return (
    <>
      <div className="fixed inset-x-0 z-[1000] flex h-16 items-center bg-[--bg-primary] px-6 text-2xl">
        <div className="text-[--color-primary]">LOGO</div>
        <div className="ml-auto flex gap-2">
          <FullscreenButton />
          <Badge count={5} size="small" offset={[-5, 5]}>
            <Button
              className="flex items-center justify-center text-[--color-primary]"
              shape="circle"
              type="text"
              icon={<BellOutlined />}
            />
          </Badge>
          <Button
            className="flex items-center justify-center text-[--color-primary]"
            shape="circle"
            type="text"
            icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
            onClick={() => setThemeMode(isDarkMode ? ThemeMode.Light : ThemeMode.Dark)}
          />
          <Button
            className="flex animate-spin-slow items-center justify-center text-[--color-primary]"
            shape="circle"
            type="text"
            icon={<SettingOutlined />}
          />
          <Dropdown menu={{ items }} arrow>
            <Avatar size={32} icon={<UserOutlined />} className="cursor-pointer" />
          </Dropdown>
        </div>
      </div>
    </>
  );
}
