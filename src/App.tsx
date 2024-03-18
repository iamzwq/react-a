import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import { router } from "@/router";
import { RouterLoading } from "@/components";
import { useSettingStore } from "@/stores";
import { StaticAntd } from "@/utils";
import { ThemeMode } from "@/typings/public";

dayjs.locale("zh-cn");

export default function App() {
  const themeMode = useSettingStore(state => state.themeMode);

  const isDarkMode = themeMode === ThemeMode.Dark;

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add(ThemeMode.Dark);
    } else {
      document.body.classList.remove(ThemeMode.Dark);
    }
  }, [isDarkMode]);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#ea580c",
        },
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        cssVar: true,
        hashed: false,
      }}
    >
      <AntdApp>
        <StaticAntd />
        <Suspense fallback={<RouterLoading />}>
          <RouterProvider router={router} />
        </Suspense>
      </AntdApp>
    </ConfigProvider>
  );
}
