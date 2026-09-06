import js from '@eslint/js';
import globals from 'globals';

// Small on purpose. Without type information eslint's reach here is narrow, so
// this config carries the rules that catch things this codebase has actually
// grown — unused bindings left behind by a removal, and the two syntax habits
// that make a diff harder to read than it needs to be.
export default [
  { ignores: ['dist/**'] },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: { ecmaVersion: 2023, sourceType: 'module', globals: globals.browser },
  },
  {
    files: ['tools/**/*.js', '*.config.js'],
    languageOptions: { ecmaVersion: 2023, sourceType: 'module', globals: globals.node },
  },
  {
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      eqeqeq: ['error', 'smart'],
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
];
