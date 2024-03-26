import { Link } from "react-router-dom";
import { Avatar, Dropdown, type MenuProps } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

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

export default function AvatarWrapper() {
  return (
    <Dropdown menu={{ items }} arrow>
      <Avatar
        size={36}
        icon={<UserOutlined />}
        className="cursor-pointer bg-primary text-white"
      />
    </Dropdown>
  );
}
