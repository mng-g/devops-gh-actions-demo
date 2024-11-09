import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',       // ECMAScript version
      sourceType: 'module',        // Use 'module' for ES module syntax
      globals: {                   // Combine globals
        ...globals.browser,        // Add browser globals
        ...globals.node,           // Add Node.js globals if running in Node
        describe: 'readonly',      // Mocha globals
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      // Customize rules to match your coding standards
      'no-console': 'off',            // Allow console statements
      'quotes': ['error', 'single'],  // Enforce single quotes
      'semi': ['error', 'always'],    // Enforce semicolons at line ends
      'indent': ['error', 2],         // Enforce 2-space indentation
    },
  },
  pluginJs.configs.recommended, // Use recommended rules from ESLint JS plugin
];
