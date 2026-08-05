import { test, expect } from '@playwright/test';

test('visual test for result screen', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('start-page.png', {
        maxDiffPixelRatio: 0.1,
    });
});
