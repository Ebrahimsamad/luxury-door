import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      // Disable React prop validation
      "react/prop-types": "off",
      // Turn off target="_blank" warning if not needed
      "react/jsx-no-target-blank": "off",
      // Enforce hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Add React refresh warning
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Additional enhancements
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Allow unused variables prefixed with _
      "react/jsx-boolean-value": ["warn", "never"], // Omit "true" in boolean props
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ], // Avoid unnecessary braces
      "react/self-closing-comp": "warn", // Suggest self-closing tags when no children
      "react/jsx-sort-props": ["off", { shorthandLast: true }], // Enforce prop sorting
    },
  },
];
