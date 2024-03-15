import { Button } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { setThemeMode, useSettingStore } from "@/stores";
import { ThemeMode } from "@/typings/public";

export default function Header() {
  const themeMode = useSettingStore(state => state.themeMode);
  const isDarkMode = themeMode === ThemeMode.Dark;

  return (
    <>
      <div className="fixed inset-x-0 z-[1000] flex h-16 items-center bg-primary px-6 text-2xl">
        <div className="text-primary">LOGO</div>
        <div className="ml-auto">
          <Button
            className="flex items-center justify-center"
            type="primary"
            icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
            onClick={() => setThemeMode(isDarkMode ? ThemeMode.Light : ThemeMode.Dark)}
          />
        </div>
      </div>
    </>
  );
}
