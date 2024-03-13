import { disableCache } from "@iconify/react";
import { Spin } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import SpinIndicator from "./components/SpinIndicator/index.tsx";
// iconify icon
import "./utils/iconifyIcon";

import "./styles/index.css";

// https://iconify.design/docs/icon-components/react/disable-cache.html
disableCache("all");

Spin.setDefaultIndicator(<SpinIndicator />);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
