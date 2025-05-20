import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
      // '@typescript-eslint/no-unused-vars': [
      //   'warn',
      //   {
      //     argsIgnorePattern: '^_', // ignore les args comme `_dc`
      //     varsIgnorePattern: '^_' // (optionnel) ignore aussi les variables locales préfixées
      //   }
      // ]
    }
  }
]

export default eslintConfig
