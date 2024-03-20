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
      className="fixed h-full"
    >
      {children}
    </Layout.Sider>
  );
}
