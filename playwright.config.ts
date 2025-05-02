import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  retries: 0,
  reporter: 'html',
  projects: [
    {
      name: 'week1',
      testMatch: /.*week1\/.*/
    },
    {
      name: 'week2',
      testMatch: /.*week2\/.*/
    },
    {
      name: 'week3',
      testMatch: /.*week3\/.*/
    },
    {
      name: 'week4',
      testMatch: /.*week4\/.*/
    },
    {
      name: 'week5',
      testMatch: /.*week5\/.*/
    },
    {
      name: 'week6',
      testMatch: /.*week6\/.*/
    },
    {
      name: 'week7',
      testMatch: /.*week7\/.*/
    },
    {
      name: 'week8',
      testMatch: /.*week8\/.*/
    },
    {
      name: 'week9',
      testMatch: /.*week9\/.*/
    },
    {
      name: 'week10',
      testMatch: /.*week10\/.*/
    },
    {
      name: 'week11',
      testMatch: /.*week11\/.*/
    }
  ],
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://example.com',
    viewport: { width: 1280, height: 720 },
    headless: true
  }
});
