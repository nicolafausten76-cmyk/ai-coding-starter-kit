import { expect, test } from '@playwright/test'

test('home page loads with status 200 and no console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))

  const response = await page.goto('/', { waitUntil: 'networkidle' })

  expect(response?.status()).toBe(200)
  expect(errors).toEqual([])
})
