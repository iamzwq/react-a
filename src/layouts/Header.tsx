import { Link } from "react-router-dom";
import { Avatar, Button, Dropdown, type MenuProps, Space } from "antd";
import {
  LogoutOutlined,
  MoonOutlined,
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
      <div className="fixed inset-x-0 z-[1000] flex h-16 items-center bg-primary px-6 text-2xl">
        <div className="text-primary">LOGO</div>
        <Space className="ml-auto">
          <Button
            className="flex items-center justify-center"
            type="primary"
            icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
            onClick={() => setThemeMode(isDarkMode ? ThemeMode.Light : ThemeMode.Dark)}
          />
          <Dropdown menu={{ items }} arrow>
            <Avatar size={32} icon={<UserOutlined />} className="cursor-pointer" />
          </Dropdown>
        </Space>
      </div>
    </>
  );
}
