import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    ignores: ['../.prettierrc.cjs'],
    languageOptions: { globals: globals.browser },
    plugins: {
      react: pluginReactConfig,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect'
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
