import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Unmodified TailAdmin demo surfaces kept only as implementation references.
    "jsvectormap.d.ts",
    "src/components/calendar/**",
    "src/components/ecommerce/**",
    "src/context/ThemeContext.tsx",
    "src/layout/AppSidebar.tsx",
  ]),
]);

export default eslintConfig;
