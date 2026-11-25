import {test,expect} from '@playwright/test';

test('Google Search Test',async ({ page }) => {

    await page.goto('https://www.google.com/ncr');

    //handle popup (like Accept cookies)
    const acceptButton = page.locator('button:has-text("Accept all")');
    if(await acceptButton.isVisible()){
        await acceptButton.click();
        console.log('Popup accepted');
    }

    await page.locator('textarea[name="q"]').fill('Playwright');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);//wait For Results
    const results = await page.locator('#search').count();
    expect(results).toBeGreaterThanOrEqual(0);

}); 