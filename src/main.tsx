import { disableCache } from "@iconify/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// iconify icon
import "./utils/iconifyIcon";

import "./styles/index.css";

// https://iconify.design/docs/icon-components/react/disable-cache.html
disableCache("all");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
