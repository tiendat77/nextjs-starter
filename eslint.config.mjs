import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      prettier: prettier,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
          printWidth: 120,
        },
      ],
      indent: [
        'warn',
        2,
        {
          SwitchCase: 1,
        },
      ],
      quotes: [
        'warn',
        'single',
        {
          avoidEscape: true,
        },
      ],
      curly: 'warn',
      'no-unused-vars': 'off',
      'no-unreachable': 'warn',
      semi: 'warn',
      'eol-last': 'warn',
    },
  },
];

export default eslintConfig;
