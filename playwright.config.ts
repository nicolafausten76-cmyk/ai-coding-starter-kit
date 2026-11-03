import { defineConfig, devices } from '@playwright/test'

// Set PORT if another app already runs on 3000. Otherwise Playwright would
// reuse that server and test the wrong app.
const port = process.env.PORT ?? '3000'
const baseURL = `http://localhost:${port}`

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  // Uses the locally installed Google Chrome, so no browser download is needed.
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 7'], channel: 'chrome' } },
  ],
  webServer: {
    command: 'npm run dev',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
})
