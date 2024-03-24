import { PropsWithChildren } from "react";
import { Layout } from "antd";

export default function Content({ children }: PropsWithChildren) {
  return <Layout.Content>{children}</Layout.Content>;
}
