import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function SuspenseFallback() {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return null;
}
