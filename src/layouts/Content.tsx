import { useSettingsStore } from "@/stores/settings";
import { Layout } from "antd";
import { PropsWithChildren } from "react";

export default function Content({ children }: PropsWithChildren) {
  const siderCollapsed = useSettingsStore(state => state.siderCollapsed);
  return (
    <Layout.Content
      className={`h-screen transition-all ${siderCollapsed ? "lg:ml-[80px]" : "lg:ml-[200px]"}`}
    >
      {children}
    </Layout.Content>
  );
}
