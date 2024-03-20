import { useEffect, useRef } from "react";

/**
 * 使用useRef来记录组件的渲染次数
 * @returns 组件的渲染次数
 */
export const useRenderCount = () => {
  const countRef = useRef(1);
  useEffect(() => {
    countRef.current++;
  });
  return countRef.current;
};
