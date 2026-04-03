// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Configuration
 * Enhanced for real-time project usage
 */
export default defineConfig({
  testDir: './tests',                 // Folder containing test files
  timeout: 60 * 1000,                 // Max time for each test (1 min)
  globalSetup: './GlobalSetup.mjs',   // Runs once before all tests to generate auth session
  fullyParallel: true,                // Run tests in files in parallel
  forbidOnly: !!process.env.CI,       // Fail CI build if test.only left in code
  retries: process.env.CI ? 2 : 0,    // Retry failed tests on CI
  workers: process.env.CI ? 1 : undefined, // Single worker on CI to avoid session conflicts

  reporter: [
    ['list'],                          // Terminal-friendly logs
    ['html', { open: 'never' }]       // HTML report, change open: 'always' if needed
  ],

  use: {
    baseURL: 'https://rahulshettyacademy.com',  // Base URL for relative navigation
    storageState: 'storage/auth.json',         // Auth session to bypass login
    trace: 'on-first-retry',                   // Collect trace for debugging retries
    screenshot: 'only-on-failure',            // Capture screenshots on failures
    video: 'retain-on-failure',                // Capture video for failed tests
    actionTimeout: 30 * 1000,                  // Timeout for actions like click/fill
    navigationTimeout: 60 * 1000,              // Timeout for page.goto and waits
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Mobile projects (optional)
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    // Branded browsers (optional)
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  // Optional: run a local server before tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
