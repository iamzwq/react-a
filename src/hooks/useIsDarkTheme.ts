import { useEffect, useState } from "react";
import { useSettingStore } from "@/stores";
import { ThemeMode } from "@/typings/public";

export const useIsDarkTheme = () => {
  const themeMode = useSettingStore(state => state.themeMode);

  const [currentTheme, setCurrentTheme] = useState(themeMode);

  useEffect(() => {
    const mediaQueryDark = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaQueryChange = () => {
      if (mediaQueryDark.matches) {
        setCurrentTheme(ThemeMode.Dark);
        document.body.classList.add(ThemeMode.Dark);
      } else {
        setCurrentTheme(ThemeMode.Light);
        document.body.classList.remove(ThemeMode.Dark);
      }
    };

    if (themeMode === ThemeMode.System) {
      handleMediaQueryChange();
      mediaQueryDark.addEventListener("change", handleMediaQueryChange);
    } else if (themeMode === ThemeMode.Dark) {
      setCurrentTheme(ThemeMode.Dark);
      document.body.classList.add(ThemeMode.Dark);
    } else if (themeMode === ThemeMode.Light) {
      setCurrentTheme(ThemeMode.Light);
      document.body.classList.remove(ThemeMode.Dark);
    }

    return () => {
      mediaQueryDark.removeEventListener("change", handleMediaQueryChange);
    };
  }, [themeMode]);

  return currentTheme === ThemeMode.Dark;
};
