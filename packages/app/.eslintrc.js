require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/airbnb',
    'prettier',
  ],
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  rules: {
    'import/no-cycle': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '**/tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['src/store/modules/*.ts'],
      rules: {
        'class-methods-use-this': 'off',
      },
    },
    {
      files: ['src/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['src/**/*.stories.{j,t}s?(x)', '**/*.config.{t,j}s'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    // Fix no-used-vars when importing ts types in .vue files
    {
      files: ['src/**/*.vue'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
};
