module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:jest/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jest/style',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/jsx-runtime",
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts',
    'jest.config.cjs',
    'rollup.config.js'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: '.'
  },
  plugins: [
    'react-refresh',
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys'
  ],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': 'off',
    indent: 'off',
    'jest/expect-expect': [
      'error',
      {
        additionalTestBlockFunctions: [],
        assertFunctionNames: ['expect', 'JestBuilder.test']
      }
    ],
    'jest/no-mocks-import': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        embeddedLanguageFormatting: 'auto',
        experimentalTernaries: false,
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        rangeStart: 0,
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      },
      {
        usePrettierrc: false
      }
    ],
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(elementRef)'
      }
    ],
    'react-refresh/only-export-components': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css']
      }
    ],
    'react/prop-types': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^(react|react-router-dom)'],
          ['^@?\\w'],
          ['@/app', '@/context', '@/modules', '@/repository'],
          ['@/components', '@/hooks'],
          ['@/utils', '@/constant', '@/model', '@/types'],
          [
            '^\\u0000',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$'
          ]
        ]
      }
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      {
        caseSensitive: false
      }
    ],
    'sort-imports': 'off',
    'sort-keys-fix/sort-keys-fix': 2,
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    },
    react: {
      version: 'detect'
    }
  }
};
