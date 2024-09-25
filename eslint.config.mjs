import prettierPlugin from 'eslint-plugin-prettier';
import playwrightPlugin from 'eslint-plugin-playwright';

export default {
    ignores: ["node_modules/", "*.min.js"],
    plugins: {
        prettier: prettierPlugin,
        playwright: playwrightPlugin,
    },
    rules: {
        'no-console': 'warn',
        'prettier/prettier': 'error',
        'playwright/no-wait-for-timeout': 'warn',
    },
    overrides: [
        {
            files: ['*.spec.ts'],
            rules: {
             
            }
        }
    ]
};
