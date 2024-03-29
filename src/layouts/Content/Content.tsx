import { Suspense } from "react";
import { Layout } from "antd";
import { SuspenseFallback } from "@/components";
import TransitionContent from "./components/TransitionContent";

export default function Content() {
  return (
    <Layout.Content>
      {/* <KeepAliveTabWrapper /> */}
      <Suspense fallback={<SuspenseFallback />}>
        <TransitionContent />
      </Suspense>
    </Layout.Content>
  );
}
