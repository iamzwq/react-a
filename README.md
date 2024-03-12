## 1. 创建项目

```bash
pnpm create vite@latest
```

> 选择 `React` + `TypeScript` + `SWC`

## 2. 配置项目

安装 vscode 插件:

- ESLint
- Prettier - Code formatter

### 2.1. 安装 `vite-plugin-legacy-swc` 配置打包浏览器兼容

为使用`SWC`的生产构建提供旧版浏览器支持。

```bash
pnpm add vite-plugin-legacy-swc -D
```

```ts
// vite.config.ts

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import legacy from "vite-plugin-legacy-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
```

### 2.2. 安装 `vite-plugin-chunk-split` 代码拆包插件

```bash
pnpm add vite-plugin-chunk-split -D
```

```ts
// vite.config.ts

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import legacy from "vite-plugin-legacy-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    chunkSplitPlugin(),
  ],
});
```

### 2.3. 安装并配置 `prettier`

[prettier](https://www.prettier.cn/docs//install.html)

```bash
pnpm add --save-dev --save-exact prettier
```

进入项目根目录并创建`.prettierrc`文件：

```json
{
  "arrowParens": "avoid",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxSingleQuote": false,
  "printWidth": 90,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleAttributePerLine": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```

再创建`.prettierignore`文件:

```json
.DS_Store

node_modules
dist

*.local
```

将`prettier`和`eslint`集成

```bash
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

- `eslint-config-prettier`：解决`eslint`和`prettier`冲突
- `eslint-plugin-prettier`：将`prettier`作为`eslint`规则运行，并将差异作为`ESLint`问题报告。

  > eslint-plugin-prettier 这个插件附带一个 plugin:prettier/recommended 配置，可以一次性设置插件和 eslint-config-prettier。你需要添加 plugin:prettier/recommended 作为你的.eslintrc.json 中的最后一个扩展名

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```

> plugin:prettier/recommended 做了什么

```json
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```

### 2.4. 安装 `husky` + `lint-staged` 配置代码格式检查

```bash
pnpm add husky lint-staged -D
```

初始化下`git`：

```bash
git init
```

再执行：

```bash
pnpm exec husky init
```

然后修改`.husky\pre-commit`:

```bash
npx lint-staged
```

在`package.json`添加配置:

```json
"lint-staged": {
  "*.{ts,tsx,json,scss}": "eslint --cache --fix"
}
```

### 2.5. 配置环境变量

```.env
// .env

VITE_APP_BASE_URL = "/"
VITE_APP_API_URL = "http://localhost:5050"
VITE_APP_API_PREFIX = "/api"
```

添加`typescript`的智能提示，打开`src/vite-env.d.ts`文件，添加环境变量`ts`基础定义：

```ts
// src/vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_API_PREFIX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

### 2.6. 配置路径别名

```bash
pnpm add @types/node -D
```

进入项目根目录配置`vite.config.ts`：

```ts
// vite.config.ts

import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig } from "vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import legacy from "vite-plugin-legacy-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    chunkSplitPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

`tsconfig.json`添加:

```json
{
  "compilerOptions": {
    // ...
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### 2.7. 配置项目反向代理

进入项目根目录配置`vite.config.ts`：

```ts
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import legacy from "vite-plugin-legacy-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 根据开发、生产环境模式动态读取环境变量
  const configEnv = loadEnv(mode, process.cwd(), "");

  return {
    base: configEnv.VITE_APP_BASE_URL,
    plugins: [
      react(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      chunkSplitPlugin(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      proxy: {
        [configEnv.VITE_APP_API_PREFIX]: {
          target: configEnv.VITE_APP_API_URL,
          changeOrigin: true,
          rewrite: path => path.replace(configEnv.VITE_APP_API_PREFIX, ""),
        },
      },
    },
  };
});
```

## 3. 项目开发

### 3.1. 安装`tailwindcss`

```bash
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

修改`tailwind.config.js`文件，添加如下内容：

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use custom base style (src/theme/base.css)
    preflight: false, // https://tailwindcss.com/docs/preflight#disabling-preflight
  },
  plugins: [],
};
```

修改`index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
