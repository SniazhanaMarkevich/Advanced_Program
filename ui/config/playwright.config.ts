import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '../tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: 0,

  workers: 1,

  reporter: [
    ['html', { open: 'never', outputFolder: '../assets/reporter', outputFile: 'html-reporter' }],
  ],

  use: {
    actionTimeout: 0,
    headless: false,
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1920, height: 1080 },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  outputDir: '../assets/test-result',
});
