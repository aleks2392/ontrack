/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential', // Убедитесь, что здесь указан Vue 3
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Отключите правило, запрещающее несколько корневых элементов
    'vue/no-multiple-template-root': 'off'
  }
}
