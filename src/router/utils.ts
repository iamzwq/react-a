import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { set } from "lodash-es";

const metaModule = import.meta.glob(
  ["/src/pages/**/meta.ts", "!**/(login|not-found)/meta.ts"],
  { eager: true }
);
const pageModules = import.meta.glob([
  "/src/pages/**/index.tsx",
  "!**/(login|not-found)/index.tsx",
]);

export const generateRoutes = () => {
  const pathConfig = {};
  Object.keys(pageModules).forEach(filePath => {
    const routePath = filePath
      .replace("/src/pages/", "")
      .replace(/.tsx$/, "")
      .replace(/\[([\w-]+)]/, ":$1")
      .split("/");
    set(pathConfig, routePath, {
      page: pageModules[filePath],
      // meta: metaModule[`/src/pages/${routePath.join("/")}/meta.ts`].default,
      meta: metaModule[filePath.replace("/index.tsx", "/meta.ts")],
    });
  });
  return pathConfig;
};

export const mapPathConfigToRoutes = (pathConfig: Record<string, any>): RouteObject[] => {
  return Object.entries(pathConfig).map(([path, child]) => {
    const { index, ...rest } = child;
    const { page, meta } = index || {};

    return {
      path,
      Component: lazy(page),
      children: mapPathConfigToRoutes(rest),
      loader: meta?.loader,
    };
  });
};

export const routeConfig = mapPathConfigToRoutes(generateRoutes());
