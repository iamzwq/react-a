import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function RouterLoading() {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return null;
}
