import React from "react";
import ReactDOM from "react-dom/client";
import { Spin } from "antd";
import { disableCache } from "@iconify/react";
import SpinIndicator from "@/components/SpinIndicator";
import App from "./App.tsx";
// iconify icon
import "./utils/iconifyIcon";
// css
import "./styles/index.css";

// https://iconify.design/docs/icon-components/react/disable-cache.html
disableCache("all");

Spin.setDefaultIndicator(<SpinIndicator />);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
