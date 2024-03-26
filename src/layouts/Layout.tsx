import { Outlet } from "react-router-dom";
import { Layout as AntdLayout } from "antd";
import RouterTabs from "./components/RouterTabs";
import SideBarMenu from "./components/SideMenu";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <>
      <Header />
      <AntdLayout className="bg-[--layout-body-bg]">
        <SideBar>
          <SideBarMenu />
        </SideBar>
        <AntdLayout.Content>
          <RouterTabs />
          <Outlet />
        </AntdLayout.Content>
      </AntdLayout>
    </>
  );
}
