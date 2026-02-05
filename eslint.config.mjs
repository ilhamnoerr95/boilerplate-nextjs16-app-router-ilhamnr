import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import prettierPlugin from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    name: "Custom ESLint Config",
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      // 🔧 Custom kamu
      "no-console": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@next/next/no-html-link-for-pages": ["error"],
      "no-var": "error",
    },
  },
]);

export default eslintConfig;
