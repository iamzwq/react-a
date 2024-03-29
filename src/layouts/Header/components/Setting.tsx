import { useState } from "react";
import { Button, Drawer, Radio, Typography } from "antd";
import { MoonOutlined, SettingOutlined, SunOutlined } from "@ant-design/icons";
import { setThemeMode, useSettingStore } from "@/stores";
import ComputerIcon from "@/assets/icons/ComputerIcon";
import { ThemeMode } from "@/typings/public";

export default function Setting() {
  const themeMode = useSettingStore(state => state.themeMode);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className="flex animate-spin-slow items-center justify-center text-primary"
        shape="circle"
        type="text"
        size="large"
        icon={<SettingOutlined />}
        onClick={showDrawer}
      />
      <Drawer title="系统设置" onClose={onClose} open={open} closeIcon={null}>
        <Typography.Text className="flex mb-2">主题模式</Typography.Text>
        <Radio.Group
          value={themeMode}
          buttonStyle="solid"
          className="w-full flex"
          onChange={e => setThemeMode(e.target.value as ThemeMode)}
        >
          <Radio.Button value={ThemeMode.Light} className="flex-1">
            <SunOutlined /> 浅色模式
          </Radio.Button>
          <Radio.Button value={ThemeMode.Dark} className="flex-1">
            <MoonOutlined /> 深色模式
          </Radio.Button>
          <Radio.Button value={ThemeMode.System} className="flex-1">
            <ComputerIcon /> 跟随系统
          </Radio.Button>
        </Radio.Group>
      </Drawer>
    </>
  );
}
