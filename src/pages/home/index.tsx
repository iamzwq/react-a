import { useState } from "react";
import { Alert, Spin, Switch } from "antd";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="animate-router px-6 py-4">
      <Spin spinning={loading}>
        <Alert
          type="info"
          message="Alert message title"
          description="Further details about the context of this alert."
        />
      </Spin>
      <div className="mt-3">
        Loading state：
        <Switch checked={loading} onChange={setLoading} />
      </div>
    </div>
  );
}
