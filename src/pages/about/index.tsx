import { useEffect, useRef } from "react";
import { Card } from "antd";
import { Typing } from "@/utils";
// import favicon from "/favicon.svg";

const cardContent = `
  <p>大家好，我是练习时长两年半的前端工程师。我会开机，关机，复制，粘贴。</p>
`;
// <img src="${favicon}" alt="favicon" style="height:200px"/>

export default function AboutPage() {
  const sourceEl = useRef<HTMLDivElement | null>(null);
  const outputEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const typing = new Typing({
      source: sourceEl.current,
      output: outputEl.current,
      delay: 30,
    });
    if (outputEl.current) {
      outputEl.current.innerHTML = "";
    }
    typing.start();
  }, []);

  return (
    <div className="p-6">
      <Card bordered={false} title="关于我">
        <div
          style={{ display: "none" }}
          ref={sourceEl}
          dangerouslySetInnerHTML={{ __html: cardContent }}
        />
        <div ref={outputEl} />
      </Card>
    </div>
  );
}
