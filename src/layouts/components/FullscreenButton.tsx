import { Button } from "antd";
import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import { useFullscreen } from "@/hooks";

export default function FullscreenButton() {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  return (
    <Button
      className="flex items-center justify-center border-none bg-[#fff3e6] text-[--color-primary] dark:bg-[#291811]"
      shape="circle"
      icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      onClick={toggleFullscreen}
    />
  );
}
