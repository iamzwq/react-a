import { Link } from "react-router-dom";
import { Avatar, Badge, Button, Dropdown, Layout, type MenuProps } from "antd";
import { BellOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import FullscreenIconButton from "./components/FullscreenIconButton";
import SettingIconButton from "./components/SettingIconButton";

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
  return (
    <>
      <Layout.Header className="sticky top-0 z-[1000] flex h-16 items-center px-6 text-2xl bg-[--layout-header-bg] shadow-sm">
        <Link to="/home" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="logo" className="w-9 h-9" />
          <div className="text-primary tracking-[4px] cursor-pointer font-bold text-2xl">
            LOGO
          </div>
        </Link>
        <div className="ml-auto flex gap-1">
          <FullscreenIconButton />
          <Badge count={5} size="small" offset={[-5, 5]}>
            <Button
              className="flex items-center justify-center text-primary"
              shape="circle"
              type="text"
              size="large"
              icon={<BellOutlined />}
            />
          </Badge>
          <SettingIconButton />
          <Dropdown menu={{ items }} arrow>
            <Avatar
              size={36}
              icon={<UserOutlined />}
              className="cursor-pointer bg-primary text-white"
            />
          </Dropdown>
        </div>
      </Layout.Header>
    </>
  );
}
