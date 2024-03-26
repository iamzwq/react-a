import { useEffect, useState } from "react";
import { useLocation, useMatches, useNavigate } from "react-router-dom";
import { Tabs } from "antd";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

export default function KeepAliveTabWrapper() {
  const matches = useMatches();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [activeTab, setActiveTab] = useState<any>();
  const [routerTabs, setRouterTabs] = useState<any[]>([]);

  const remove = (targetKey: TargetKey) => {
    if (routerTabs.length === 1) return;

    const filteredItems = routerTabs.filter(tab => tab.pathname !== targetKey);
    setRouterTabs(filteredItems);
    if (targetKey === pathname) {
      const newPathname = filteredItems[0].pathname;
      setActiveTab(newPathname);
      navigate(newPathname);
    }
  };

  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "remove") {
      remove(targetKey);
    }
  };

  useEffect(() => {
    if (!routerTabs.some(tab => tab.pathname === pathname)) {
      const matchedRouter = matches.at(-1);
      const routerHandle = matchedRouter?.handle as any;
      setRouterTabs([...routerTabs, { pathname, title: routerHandle?.title }]);
    }
    setActiveTab(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const items = routerTabs.map(tab => ({
    key: tab.pathname,
    label: tab.title || "Unknown",
    // children: <Outlet />,
  }));

  return (
    <Tabs
      items={items}
      activeKey={activeTab}
      type="editable-card"
      hideAdd
      onChange={(key: string) => {
        setActiveTab(key);
        navigate(key);
      }}
      onEdit={onEdit}
    />
  );
}
