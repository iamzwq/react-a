import { ThemeConfig } from "antd";

export const themeConfig: Record<"light" | "dark", ThemeConfig> = {
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
