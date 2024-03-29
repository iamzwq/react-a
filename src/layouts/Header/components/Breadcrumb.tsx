import { useMatches } from "react-router-dom";
import { Breadcrumb as AntdBreadcrumb } from "antd";

export default function Breadcrumb() {
  const matches = useMatches();
  const breadcrumbItems = matches
    .filter(match => match.pathname !== "/")
    .map(match => ({
      title: (match.handle as any)?.title || "xxx",
    }));
  return <AntdBreadcrumb items={breadcrumbItems} />;
}
