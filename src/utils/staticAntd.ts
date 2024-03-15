import { App, message as antdMessage, notification as antdNotification } from "antd";
import type { useAppProps } from "antd/es/app/context";

let message: useAppProps["message"] = antdMessage;
let notification: useAppProps["notification"] = antdNotification;
let modal: useAppProps["modal"];

export function StaticAntd() {
  const staticFunctions = App.useApp();

  message = staticFunctions.message;
  notification = staticFunctions.notification;
  modal = staticFunctions.modal;

  return null;
}

export { message, modal, notification };
