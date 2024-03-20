import { useRef } from "react";

/**
 * 判断是否是第一次挂载
 * @returns 如果是第一次挂载，返回true，否则返回false
 */
export const useIsFirstRender = () => {
  const isFirstMountRef = useRef(true);

  if (isFirstMountRef.current) {
    isFirstMountRef.current = false;

    return true;
  }

  return isFirstMountRef.current;
};
