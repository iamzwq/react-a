import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { domAnimation, LazyMotion, m } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
// import KeepAliveTabWrapper from "./components/KeepAliveTabWrapper";

export default function Content() {
  const location = useLocation();
  return (
    <Layout.Content>
      {/* <KeepAliveTabWrapper /> */}
      <Suspense fallback={<ProgressBar />}>
        <LazyMotion features={domAnimation}>
          <m.div
            key={location.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </m.div>
        </LazyMotion>
      </Suspense>
    </Layout.Content>
  );
}
