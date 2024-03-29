import { Suspense, useEffect, useState } from "react";
import { useLocation, useMatches, useNavigate, useOutlet } from "react-router-dom";
import { Tabs } from "antd";
import { SuspenseFallback } from "@/components";
import { last } from "@/utils";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

export default function KeepAliveTabWrapper() {
  const matches = useMatches();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const outlet = useOutlet();

  const [activeTab, setActiveTab] = useState<any>();
  const [routerTabs, setRouterTabs] = useState<any[]>([]);

  const remove = (targetKey: TargetKey) => {
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
      const matchedRouter = last(matches);
      const routerHandle = matchedRouter?.handle as any;
      setRouterTabs([
        ...routerTabs,
        {
          pathname,
          title: routerHandle?.title,
          outlet,
          routerPath: matchedRouter?.pathname,
        },
      ]);
    }
    setActiveTab(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, matches]);

  const items = routerTabs.map(tab => ({
    key: tab.pathname,
    label: tab.title || "Unknown",
    children: <Suspense fallback={<SuspenseFallback />}>{tab.outlet}</Suspense>,
    closable: routerTabs.length > 1,
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
