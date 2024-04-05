import { Suspense, useEffect, useMemo, useState } from "react";
import { useMatches, useNavigate, useOutlet } from "react-router-dom";
import { Tabs } from "antd";
import ProgressBar from "@/components/ProgressBar";
import { last, randomStr } from "@/utils";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

export default function KeepAliveTabWrapper() {
  const matches = useMatches();
  const navigate = useNavigate();
  const outlet = useOutlet();

  const [activeTab, setActiveTab] = useState<any>();
  const [routerTabs, setRouterTabs] = useState<any[]>([]);

  const remove = (targetKey: TargetKey) => {
    const findIndex = routerTabs.findIndex(tab => tab.key === targetKey);
    if (targetKey === activeTab) {
      if (findIndex > 0) {
        navigate(routerTabs[findIndex - 1].routerPath);
      } else {
        navigate(routerTabs[findIndex + 1].routerPath);
      }
    }
    routerTabs.splice(findIndex, 1);
    setRouterTabs([...routerTabs]);
  };

  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "remove") {
      remove(targetKey);
    }
  };

  useEffect(() => {
    const matchedRouter = last(matches)!;
    const { pathname: routerPath, handle = {} } = matchedRouter;
    const findTab = routerTabs.find(tab => tab.routerPath === routerPath);
    if (findTab) {
      setActiveTab(findTab.key);
      return;
    }

    if (routerPath !== "/" && handle.hideTab !== true) {
      const key = randomStr();
      setRouterTabs([
        ...routerTabs,
        {
          title: handle.title,
          outlet,
          routerPath,
          key,
        },
      ]);
      setActiveTab(key);
    } else {
      setActiveTab("");
      navigate(routerPath === "/" ? "/home" : routerPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches]);

  const items = useMemo(() => {
    return routerTabs.map(tab => ({
      key: tab.key,
      label: tab.title || "Unknown",
      children: <Suspense fallback={<ProgressBar />}>{tab.outlet}</Suspense>,
      closable: routerTabs.length > 1,
    }));
  }, [routerTabs]);

  return (
    <Tabs
      items={items}
      activeKey={activeTab}
      type="editable-card"
      tabBarGutter={4}
      hideAdd
      onChange={(key: string) => {
        const findTab = routerTabs.find(tab => tab.key === key);
        navigate(findTab.routerPath);
      }}
      onEdit={onEdit}
    />
  );
}
