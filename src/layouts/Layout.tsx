import { Outlet } from "react-router-dom";
import { Layout as AntdLayout } from "antd";
import SideBarMenu from "./components/SideMenu";
import Content from "./Content";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <Header />
      <AntdLayout className="mt-16">
        <SideBar>
          <SideBarMenu />
        </SideBar>
        <Content>
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
}
