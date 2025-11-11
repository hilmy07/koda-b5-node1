import js from "@eslint/js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      stylistic,
    },
    rules: {
      semi: "error",
      "no-var": "error",
      curly: "warn",
      "no-unused-vars": "warn",

      // stylistic rules
      "stylistic/quotes": ["error", "double"],
    },
  },
];
