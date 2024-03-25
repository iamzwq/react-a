import { useEffect, useMemo, useState } from "react";
import { useSettingStore } from "@/stores";
import { ThemeMode } from "@/typings/public";

export const useDark = () => {
  const themeMode = useSettingStore(state => state.themeMode);

  const [isSystemDark, setIsSystemDark] = useState(false);

  useEffect(() => {
    const mediaQueryDark = window.matchMedia("(prefers-color-scheme: dark)");
    setIsSystemDark(mediaQueryDark.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsSystemDark(event.matches);
    };
    mediaQueryDark.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryDark.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return useMemo(() => {
    return (
      themeMode === ThemeMode.Dark || (isSystemDark && themeMode !== ThemeMode.Light)
    );
  }, [isSystemDark, themeMode]);
};
