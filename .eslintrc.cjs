module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react-refresh/only-export-components": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "error",
    "no-debugger": "error",
    "simple-import-sort/imports": [
      "error",
      {
        // groups: ["builtin", "external", "internal", "parent", "sibling", "all"],
        groups: [
          [
            "^vite$",
            "^node",
            "^react$",
            "^react-dom",
            "^react-router-dom$",
            "^antd$",
            "^@?\\w",
            "^@/",
            "^\\.",
            "^\\..",
            "^",
            "^@/types",
          ],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
};
