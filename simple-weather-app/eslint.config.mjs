import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    // Add this configuration specifically for test files to recognize Mocha globals
    files: ['**/*.test.mjs'],
    languageOptions: {
      globals: {
        ...globals.mocha,  // Include Mocha globals for describe, it, etc.
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-console': 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
    },
  },
];
