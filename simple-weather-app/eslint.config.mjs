import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 'latest',       // ECMAScript version
      sourceType: "commonjs",      // Keep as "commonjs" for your project
      globals: {                   // Combine globals
        ...globals.browser,
        ...globals.node,           // Add Node.js globals if running in Node
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      // Customize rules to match your coding standards
      "no-console": "off",            // Allow console statements
      "quotes": ["error", "single"],  // Enforce single quotes
      "semi": ["error", "always"],    // Enforce semicolons at line ends
      "indent": ["error", 2],         // Enforce 2-space indentation
    },
  },
];
