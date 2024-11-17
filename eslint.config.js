import eslintPluginJs from "@eslint/js"
import eslintPluginAstro from "eslint-plugin-astro"
import eslintPluginTs from "typescript-eslint"

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,astro}"]
  },
  {
    ignores: [".astro/**/*", "dist/**/*", "**/static/", "**/env.d.ts"]
  },
  eslintPluginJs.configs.recommended,
  ...eslintPluginTs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "linebreak-style": [
        "error",
        "unix"
      ],
      "indent": [
        "error",
        2,
        {
          "SwitchCase": 1
        }
      ],
      "no-tabs": [
        "error"
      ],
      "semi": [
        "error",
        "never"
      ],
      "quotes": [
        "error",
        "double"
      ]
    },
  },
]
