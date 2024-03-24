import { Button } from "antd";
import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import { useFullscreen } from "@/hooks";

export default function FullscreenButton() {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  return (
    <Button
      className="flex items-center justify-center text-primary"
      shape="circle"
      type="text"
      size="large"
      icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      onClick={toggleFullscreen}
    />
  );
}
