import { Outlet } from "react-router-dom";
import { Layout as AntdLayout } from "antd";
import SiderBarMeun from "./components/SiderMenu";
import Content from "./Content";
import Header from "./Header";
import SiderBar from "./SiderBar";

export default function Layout() {
  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <Header />
      <AntdLayout className="mt-16">
        <SiderBar>
          <SiderBarMeun />
        </SiderBar>
        <Content>
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
}
