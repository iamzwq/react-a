import AnimatedOutlet from "@/components/AnimatedOutlet";
import { Layout as AntdLayout } from "antd";
import Content from "./Content";
import Header from "./Header";
import SiderBar from "./Sider/SiderBar";
import SiderBarMeun from "./Sider/SiderBarMenu";

export default function Layout() {
  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <Header />
      <AntdLayout className="mt-16">
        <SiderBar>
          <SiderBarMeun />
        </SiderBar>
        <Content>
          <AnimatedOutlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
}
