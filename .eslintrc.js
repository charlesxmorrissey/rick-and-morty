module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'react',
    'react-hooks',
    'prettier',
    'eslint-plugin-import-helpers',
    'sort-destructure-keys',
    'typescript-sort-keys',
  ],

  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:@next/next/recommended',
    'plugin:typescript-sort-keys/recommended',
  ],

  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-unresolved': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        alphabetize: { order: 'asc', ignoreCase: false },
        groups: [
          'module',
          '/^(assets|components|constant|helpers|hooks|pages|reducers|utils)/',
          '/^styles/',
          '/^public/',
          ['sibling', 'index'],
        ],
        newlinesBetween: 'always',
      },
    ],
    'jsx-a11y/anchor-has-content': [
      0,
      {
        components: ['Anchor'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', 'jsx'] }],
    'react/jsx-sort-props': 'error',
    'react/no-children-prop': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'sort-keys': ['error'],
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
}
