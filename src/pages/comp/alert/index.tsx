import { useState } from "react";
import { Alert, Space, Spin, Switch } from "antd";

export default function AlertComponentPage() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="animate-router-enter px-6 pt-4">
      <Space direction="vertical" className="w-full">
        <Spin spinning={loading}>
          <Alert
            message="Success Text"
            description="Success Description Success Description Success Description"
            type="success"
          />
        </Spin>
        <Spin spinning={loading}>
          <Alert
            message="Info Text"
            description="Info Description Info Description Info Description Info Description"
            type="info"
          />
        </Spin>
        <Spin spinning={loading}>
          <Alert
            message="Warning Text"
            description="Warning Description Warning Description Warning Description Warning Description"
            type="warning"
          />
        </Spin>
        <Spin spinning={loading}>
          <Alert
            message="Error Text"
            description="Error Description Error Description Error Description Error Description"
            type="error"
          />
        </Spin>
        <div>
          Loading state：
          <Switch checked={loading} onChange={setLoading} />
        </div>
      </Space>
    </div>
  );
}
