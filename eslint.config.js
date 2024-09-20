import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    ignores: ['/home/mouss/mc-portfolio-front/.prettierrc.cjs'],
    languageOptions: { globals: globals.browser },
    plugins: {
      react: pluginReactConfig,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect', // Détecte automatiquement la version de React
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
