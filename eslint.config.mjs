import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig({
  esm: true,
  rules: {
    'max-lines-per-function': 'off',
  },
});
