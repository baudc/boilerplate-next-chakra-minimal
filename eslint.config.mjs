import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import unusedImports from 'eslint-plugin-unused-imports';
import tsEslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  ...tsEslint.configs.strict,
  {
    files: ['**/*.{mjs,js,jsx,ts,tsx}'],
    plugins: {
      import: importPlugin,
      react,
      'unused-imports': unusedImports,
      prettier,
    },
    rules: {
      'import/no-unresolved': 0, // handled by TypeScript
      curly: 2,
      // `import/default`, `import/namespace` and `import/no-duplicates` are slow.
      'import/default': 0,
      'import/named': 0,
      'import/namespace': 0,
      'import/no-duplicates': 0,
      'import/no-extraneous-dependencies': 2,
      'import/no-named-as-default-member': 0,
      'import/order': 0,
      'no-const-assign': 2,
      'no-constant-binary-expression': 2,
      'no-extra-parens': [2, 'functions'],
      'no-irregular-whitespace': 2,
      'no-this-before-super': 2,
      'no-unused-expressions': 2,
      'no-unused-labels': 2,
      'no-unused-vars': 0,
      'no-useless-rename': 2,
      'no-var': 2,
      'no-console': 2,
      'no-warning-comments': [2, { terms: ['@nocommit'] }],
      'object-curly-spacing': 0,
      'object-shorthand': 2,
      'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
      'prefer-const': 2,
      'react/jsx-sort-props': 2,
      'react/prop-types': 2,
      'react/react-in-jsx-scope': 0,
      'react/require-default-props': [
        2,
        {
          forbidDefaultForRequired: true,
          functions: 'defaultArguments',
        },
      ],
      'unused-imports/no-unused-imports': 1,

      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsEslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      'typescript-sort-keys': typescriptSortKeys,
    },
    rules: {
      'import/no-unresolved': 0, // handled by TypeScript
      '@typescript-eslint/consistent-type-imports': 2,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-dynamic-delete': 0,
      '@typescript-eslint/no-invalid-void-type': 0,
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-this-alias': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-var-requires': 0,
      'react/prop-types': 0,
      'typescript-sort-keys/interface': 2,
      'typescript-sort-keys/string-enum': 2,
    },
  },
  {
    ignores: ['node_modules/**/*', '.vscode/**/*'],
  },
];
