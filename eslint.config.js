import eslintPluginJs from "@eslint/js"
import eslintPluginAstro from "eslint-plugin-astro"
// import eselintPluginTs from "typescript-eslint"

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"]
  },
  {
    ignores: [".astro/**/*", "dist/**/*", "**/static/"]
  },
  eslintPluginJs.configs.recommended,
  // ...eselintPluginTs.configs.recommended,
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
