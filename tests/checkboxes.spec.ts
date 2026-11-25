import { test, expect } from '@playwright/test';

test('checkboxes : cocher et décocher', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkboxes = page.getByRole('checkbox');
  const premiere = checkboxes.first();
  const seconde = checkboxes.last();

  // État initial
  await expect(premiere).not.toBeChecked();
  await expect(seconde).toBeChecked();

  // Actions
  await premiere.check();
  await seconde.uncheck();

  // État final
  await expect(premiere).toBeChecked();
  await expect(seconde).not.toBeChecked();
});