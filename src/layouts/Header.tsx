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
import { ThemeMode } from "@/typings/public";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link to="/login">
        <LogoutOutlined className="mr-4" /> Logout
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
          <Badge count={5} size="small">
            <Button
              className="flex items-center justify-center border-none bg-[#fff3e6] text-[--color-primary] dark:bg-[#291811]"
              shape="circle"
              icon={<BellOutlined />}
            />
          </Badge>
          <Button
            className="flex items-center justify-center border-none bg-[#fff3e6] text-[--color-primary] dark:bg-[#291811]"
            shape="circle"
            icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
            onClick={() => setThemeMode(isDarkMode ? ThemeMode.Light : ThemeMode.Dark)}
          />
          <Button
            className="flex animate-spin-slow items-center justify-center"
            type="text"
            shape="circle"
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
