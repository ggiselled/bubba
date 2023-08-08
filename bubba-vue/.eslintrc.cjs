/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:vue/base',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
