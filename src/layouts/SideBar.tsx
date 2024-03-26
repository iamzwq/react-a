import { PropsWithChildren } from "react";
import { Layout } from "antd";
import { setSideCollapsed, useSettingStore } from "@/stores";

export default function SideBar({ children }: PropsWithChildren) {
  const sideCollapsed = useSettingStore(state => state.sideCollapsed);
  return (
    <Layout.Sider
      theme="light"
      collapsible
      collapsed={sideCollapsed}
      onCollapse={setSideCollapsed}
      className="sticky top-16 h-[calc(100vh-112px)] overflow-y-auto"
    >
      {children}
    </Layout.Sider>
  );
}
