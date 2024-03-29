import { Layout } from "antd";
import { setSideCollapsed, useSettingStore } from "@/stores";
import SideMenu from "./components/SideMenu";

export default function SideBar() {
  const sideCollapsed = useSettingStore(state => state.sideCollapsed);
  return (
    <Layout.Sider
      theme="light"
      collapsible
      collapsed={sideCollapsed}
      onCollapse={setSideCollapsed}
      breakpoint="lg"
      className="sticky top-16 h-[calc(100vh-112px)] overflow-y-auto"
    >
      <SideMenu />
    </Layout.Sider>
  );
}
