import { PropsWithChildren } from "react";
import { Layout } from "antd";
import { useSettingStore } from "@/stores";

export default function Content({ children }: PropsWithChildren) {
  const sideCollapsed = useSettingStore(state => state.sideCollapsed);
  return (
    <Layout.Content
      className={`h-screen transition-all ${sideCollapsed ? "lg:ml-[80px]" : "lg:ml-[200px]"}`}
    >
      {children}
    </Layout.Content>
  );
}
