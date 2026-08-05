import { test, expect } from '@playwright/test';

test('spielt ein Quiz durch', async ({ page }) => {
  await page.goto('/');

  await page.locator('[role="startButton"]', { hasText: 'Start' }).click();
  for (let i = 0; i < 10; i++) {
    // Klicke auf die erste verfügbare Antwort
    await page.locator('[role="answerButton"]').first().click();

    if (i < 9) {
      // Wenn es nicht die letzte Frage ist, auf "Next" klicken
      await page.locator('[role="nextButton"]').click();
    }
  }

  // Überprüfen, ob das Spiel beendet ist (Restart-Button sichtbar)
  await expect(page.locator('[role="startButton"]', { hasText: 'Restart' })).toBeVisible();

  // Überprüfen, ob ein Text wie "Typescript" (vom Level-Ergebnis) sichtbar ist
  await expect(page.getByText(/Typescript/i).last()).toBeVisible();
});

