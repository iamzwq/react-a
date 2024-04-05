import { Link } from "react-router-dom";
import { Avatar as AntdAvatar, Dropdown, type MenuProps, Space, Typography } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "profile",
    label: <Link to="/profile">个人中心</Link>,
    icon: <UserOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "logout",
    label: "退出登录",
    icon: <LogoutOutlined />,
    onClick: () => {
      // TODO: 清空 session
      // localStorage.removeItem("session");
      // window.location.href = "/login";
    },
  },
];

export default function Avatar() {
  return (
    <Dropdown menu={{ items }} arrow placement="bottomRight">
      <Space size="small" className="h-9 cursor-pointer">
        <AntdAvatar
          size={36}
          // icon={<UserOutlined />}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <Typography.Text className="select-none">管理员</Typography.Text>
      </Space>
    </Dropdown>
  );
}
