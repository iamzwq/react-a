import { PropsWithChildren } from "react";
import { Layout } from "antd";
import { setSiderCollapsed, useSettingStore } from "@/stores";

export default function SiderBar({ children }: PropsWithChildren) {
  const siderCollapsed = useSettingStore(state => state.siderCollapsed);
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
