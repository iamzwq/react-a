import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { App as AntdApp, ConfigProvider, Layout as AntdLayout, theme } from "antd";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import { router } from "@/router";
import ProgressBar from "@/components/ProgressBar";
import { useDark } from "@/hooks";
import { StaticAntd } from "@/utils";
import { themeConfig } from "@/theme/antd/themeConfig";
// antd 的 DatePicker 国际化中文失效，官网说是因为我项目中同时存在两个dayjs，也确实是这样，ahooks中也有dayjs
// 这样加载中文包之后就好了，我猜测应该是antd设置dayjs.locale的时候没有找到正确的中文包
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");

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
          <Suspense fallback={<ProgressBar />}>
            <RouterProvider router={router} />
          </Suspense>
        </AntdLayout>
      </AntdApp>
    </ConfigProvider>
  );
}
