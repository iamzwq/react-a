import { useEffect } from "react";
import { theme } from "antd";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function ProgressBar() {
  const { token } = theme.useToken();
  const { colorPrimary } = token;

  const changeProgressBarColor = () => {
    const nprogress = document.getElementById("nprogress");
    if (nprogress) {
      const bar: HTMLElement = nprogress.querySelector(".bar")!;
      const peg: HTMLElement = nprogress.querySelector(".peg")!;
      const spinner: HTMLElement = nprogress.querySelector(".spinner-icon")!;
      bar.style.background = colorPrimary;
      bar.style.boxShadow = `0 0 2px ${colorPrimary}`;
      peg.style.boxShadow = `0 0 10px ${colorPrimary}, 0 0 5px ${colorPrimary}`;
      spinner.style.borderTopColor = colorPrimary;
      spinner.style.borderLeftColor = colorPrimary;
    }
  };

  useEffect(() => {
    NProgress.start();
    changeProgressBarColor();
    return () => {
      NProgress.done();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
