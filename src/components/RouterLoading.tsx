import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

export default function RouterLoading() {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return null;
}
