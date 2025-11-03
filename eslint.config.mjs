import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: false,
  allConfig: false,
});

const featureSlicedConfig = compat.extends("@feature-sliced").map((config) => ({
  ...config,
  languageOptions: {
    ...config.languageOptions,
    ecmaVersion: 2015,
  },
}));

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...featureSlicedConfig,
  {
    settings: {
      "import/resolver": {
        typescript: {
          project: path.resolve(__dirname, "tsconfig.json"),
        },
      },
    },
  },
  {
    rules: {
      // Disable import/order since we use @trivago/prettier-plugin-sort-imports
      "import/order": "off",
    },
  },
  prettierConfig,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/shared/ui/shadcn/**"
  ]),
]);

export default eslintConfig;
