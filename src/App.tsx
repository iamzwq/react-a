import { StyleProvider, legacyLogicalPropertiesTransformer } from "@ant-design/cssinjs";
import { App as AntdApp, ConfigProvider } from "antd";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import RouterLoading from "./components/RouterLoading";
import router from "./router";
import StaticAntd from "./utils/staticAntd";

import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";

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
            colorPrimary: "#ee3f4d",
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
