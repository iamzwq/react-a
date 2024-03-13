import { PropsWithChildren } from "react";
import { Layout } from "antd";
import { useSettingsStore } from "@/stores/settings";

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
