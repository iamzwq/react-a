import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeMode } from "@/typings/public";

const initialState = {
  sideCollapsed: false,
  themeMode: ThemeMode.Light,
  isDarkMode: false,
};

export const useSettingStore = create<typeof initialState>()(
  persist(() => initialState, {
    name: "app-setting",
  })
);

export const setSideCollapsed = (sideCollapsed: boolean) => {
  useSettingStore.setState({ sideCollapsed });
};

export const setThemeMode = (themeMode: ThemeMode) => {
  useSettingStore.setState({ themeMode });
};

export const setIsDarkMode = (isDarkMode: boolean) => {
  useSettingStore.setState({ isDarkMode });
};
