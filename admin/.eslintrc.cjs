module.exports = {
  parser: '@typescript-eslint/parser', // TypeScript를 파싱하기 위한 파서
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript', // TypeScript 관련 플러그인 추가
    'plugin:@typescript-eslint/recommended', // TypeScript 권장 규칙 추가
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json', // TypeScript 프로젝트 파일 경로
  },
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@', './admin/src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {}, // TypeScript 경로를 import/resolver에 추가
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }], // .tsx 확장자 추가
    '@typescript-eslint/explicit-function-return-type': 'off', // 필요에 따라 TypeScript 규칙을 추가
    '@typescript-eslint/no-unused-vars': ['error'], // 사용되지 않는 변수를 잡아내기 위한 규칙 추가
  },
};
