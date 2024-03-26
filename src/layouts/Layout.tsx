import { Link } from "react-router-dom";
import { Badge, Button, Flex, Layout as AntdLayout } from "antd";
import { BellOutlined } from "@ant-design/icons";
import AvatarWrapper from "./components/AvatarWrapper";
import FullscreenIconButton from "./components/FullscreenIconButton";
import KeepAliveTabWrapper from "./components/KeepAliveTabWrapper";
import SettingIconButton from "./components/SettingIconButton";
import SideBarMenu from "./components/SideMenu";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <>
      <AntdLayout.Header className="sticky top-0 z-[1000] flex h-16 items-center px-6 text-2xl bg-[--layout-header-bg] shadow-sm">
        <Link to="/home" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="logo" className="w-9 h-9" />
          <div className="text-primary tracking-[4px] cursor-pointer font-bold text-2xl">
            LOGO
          </div>
        </Link>
        <Flex gap="small" className="ml-auto">
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
          <AvatarWrapper />
        </Flex>
      </AntdLayout.Header>
      <AntdLayout className="bg-[--layout-body-bg]">
        <SideBar>
          <SideBarMenu />
        </SideBar>
        <AntdLayout.Content>
          <KeepAliveTabWrapper />
        </AntdLayout.Content>
      </AntdLayout>
    </>
  );
}
