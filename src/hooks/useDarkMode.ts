import { useEffect, useMemo, useState } from "react";
import { setIsDarkMode, useSettingStore } from "@/stores";
import { ThemeMode } from "@/typings/public";

const mediaQueryDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 深色模式 hook
 * 1. 监听了系统主题变化
 * 2. 动态添加/移除 document.documentElement class
 * returns {boolean} 是否是深色模式
 */
export const useDarkMode = () => {
  const themeMode = useSettingStore(state => state.themeMode);

  const [isSystemDark, setIsSystemDark] = useState(mediaQueryDark.matches);

  // 是否是深色模式
  const isDarkMode = useMemo(() => {
    return (
      themeMode === ThemeMode.Dark || (isSystemDark && themeMode !== ThemeMode.Light)
    );
  }, [isSystemDark, themeMode]);

  // 监听系统主题变化
  useEffect(() => {
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsSystemDark(event.matches);
    };
    mediaQueryDark.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryDark.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // 添加/移除 document.documentElement class 样式
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(isDarkMode ? "dark" : "light");

    setIsDarkMode(isDarkMode);
  }, [isDarkMode]);

  return isDarkMode;
};
