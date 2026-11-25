import { test, expect } from '@playwright/test';

test('Navigation vers Microsoft', async ({ page }) => {

  await page.goto('https://www.microsoft.com');

  await expect(page).toHaveTitle(/Microsoft/);

});