import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { App as AntdApp, ConfigProvider, Layout as AntdLayout, theme } from "antd";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import { router } from "@/router";
import { RouterLoading } from "@/components";
import { StaticAntd } from "@/utils";
import { useIsDarkTheme } from "./hooks";

dayjs.locale("zh-cn");

export default function App() {
  const isDark = useIsDarkTheme();

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: isDark ? "#b37feb" : "#722ed1",
        },
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        cssVar: true,
        hashed: false,
      }}
    >
      <AntdApp>
        <AntdLayout style={{ minHeight: "100vh" }}>
          <StaticAntd />
          <Suspense fallback={<RouterLoading />}>
            <RouterProvider router={router} />
          </Suspense>
        </AntdLayout>
      </AntdApp>
    </ConfigProvider>
  );
}
