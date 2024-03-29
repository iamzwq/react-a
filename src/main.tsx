import ReactDOM from "react-dom/client";
import { Spin } from "antd";
import { SpinIndicator } from "@/components";
import App from "./App.tsx";
// css
import "./styles/index.css";

Spin.setDefaultIndicator(<SpinIndicator />);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
