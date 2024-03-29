import { Link } from "react-router-dom";
import { Badge, Button, Flex, Layout } from "antd";
import { BellOutlined } from "@ant-design/icons";
import Avatar from "./components/Avatar";
import Breadcrumb from "./components/Breadcrumb";
import Fullscreen from "./components/Fullscreen";
import Setting from "./components/Setting";

export default function Header() {
  return (
    <Layout.Header className="sticky top-0 z-[1000] flex h-16 items-center px-0 pr-6 text-2xl shadow-sm">
      <Link to="/home" className="flex items-center justify-center gap-2 w-[200px]">
        <img src="/favicon.svg" alt="logo" className="w-9 h-9" />
        <div className="text-primary tracking-[4px] cursor-pointer font-bold text-2xl">
          LOGO
        </div>
      </Link>
      <Breadcrumb />
      <Flex gap="small" className="ml-auto">
        <Fullscreen />
        <Badge count={5} size="small" offset={[-5, 5]}>
          <Button
            className="flex items-center justify-center text-primary"
            shape="circle"
            type="text"
            size="large"
            icon={<BellOutlined />}
          />
        </Badge>
        <Setting />
        <Avatar />
      </Flex>
    </Layout.Header>
  );
}
