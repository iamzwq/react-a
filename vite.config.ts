import { defineConfig, loadEnv } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
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
      visualizer({ open: false }),
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
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `js/[name]-[hash].js`,
          chunkFileNames: `js/[name]-[hash].js`,
          assetFileNames: `[ext]/[name]-[hash].[ext]`,
        },
      },
    },
  };
});
