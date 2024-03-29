import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import {
  App as AntdApp,
  ConfigProvider,
  Layout as AntdLayout,
  theme,
  type ThemeConfig,
} from "antd";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import { router } from "@/router";
import { SuspenseFallback } from "@/components";
import { useDark } from "@/hooks";
import { StaticAntd } from "@/utils";

dayjs.locale("zh-cn");

const themeConfig: Record<string, ThemeConfig> = {
  light: {
    components: {
      Layout: {
        headerBg: "#fff",
        bodyBg: "#fafafa",
      },
    },
  },
  dark: {
    components: {
      Layout: {
        headerBg: "#141414",
        bodyBg: "#181818",
      },
    },
  },
};

export default function App() {
  const isDark = useDark();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        cssVar: true,
        hashed: false,
        token: {
          colorPrimary: "#722ed1",
        },
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        ...themeConfig[isDark ? "dark" : "light"],
      }}
    >
      <AntdApp>
        <AntdLayout style={{ minHeight: "100vh" }}>
          <StaticAntd />
          <Suspense fallback={<SuspenseFallback />}>
            <RouterProvider router={router} />
          </Suspense>
        </AntdLayout>
      </AntdApp>
    </ConfigProvider>
  );
}
