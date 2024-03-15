import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeMode } from "@/typings/public";

const initialState = {
  siderCollapsed: false,
  themeMode: ThemeMode.Light,
};

export const useSettingStore = create<typeof initialState>()(
  persist(() => initialState, {
    name: "app-setting",
  })
);

export const setSiderCollapsed = (siderCollapsed: boolean) => {
  useSettingStore.setState({ siderCollapsed });
};

export const setThemeMode = (themeMode: ThemeMode) => {
  useSettingStore.setState({ themeMode });
};
