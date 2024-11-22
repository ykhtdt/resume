import eslintPluginJs from "@eslint/js"
import eslintPluginAstro from "eslint-plugin-astro"
import eslintPluginTs from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,astro}"],
    languageOptions: {
      parser: "espree",
      ecmaVersion: 2024,
      sourceType: "module",
    },
    rules: {
      "prettier/prettier": "warn",
    },
  },
  {
    ignores: [".astro/**/*", "dist/**/*", "**/static/", "**/env.d.ts"],
  },
  eslintPluginJs.configs.recommended,
  ...eslintPluginTs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "linebreak-style": ["error", "unix"],
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],
      "no-tabs": ["error"],
      semi: ["error", "never"],
      quotes: ["error", "double"],
    },
  },
  eslintConfigPrettier,
]
