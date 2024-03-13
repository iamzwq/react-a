import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { App as AntdApp, ConfigProvider } from "antd";
import { legacyLogicalPropertiesTransformer, StyleProvider } from "@ant-design/cssinjs";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import { RouterLoading } from "@/components";
import router from "@/router";
import StaticAntd from "@/utils/staticAntd";

dayjs.locale("zh-cn");

export default function App() {
  return (
    <StyleProvider
      hashPriority="high"
      transformers={[legacyLogicalPropertiesTransformer]}
    >
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: "#6d28d9",
          },
        }}
      >
        <AntdApp>
          <StaticAntd />
          <Suspense fallback={<RouterLoading />}>
            <RouterProvider router={router} />
          </Suspense>
        </AntdApp>
      </ConfigProvider>
    </StyleProvider>
  );
}
