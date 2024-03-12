import { setSiderCollapsed, useSettingsStore } from "@/stores/settings";
import { Layout } from "antd";
import { PropsWithChildren } from "react";

export default function SiderBar({ children }: PropsWithChildren) {
  const siderCollapsed = useSettingsStore(state => state.siderCollapsed);
  return (
    <Layout.Sider
      theme="light"
      collapsible
      collapsed={siderCollapsed}
      onCollapse={setSiderCollapsed}
      className="!fixed h-full"
    >
      {children}
    </Layout.Sider>
  );
}
