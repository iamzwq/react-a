import { useState } from "react";
import { Radio, Timeline } from "antd";
import type { RadioChangeEvent } from "antd";

export default function () {
  const [mode, setMode] = useState<"left" | "alternate" | "right">("left");

  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <section className="animate-router-enter p-6 text-center">
      <Radio.Group onChange={onChange} value={mode} className="mb-12" size="large">
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline
        mode={mode}
        items={[
          {
            label: "2024-03-09 09:12:11",
            children: "Solve initial network problems",
          },
          {
            children: "Technical testing",
          },
          {
            label: "2024-03-09 09:12:11",
            children: "Network problems being solved",
          },
          {
            label: "2024-03-09",
            children: "First commit",
          },
        ]}
      />
    </section>
  );
}
