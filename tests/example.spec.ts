import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.setContent(`
    <html>
      <head><title>Playwright Starter</title></head>
      <body><h1>Welcome</h1></body>
    </html>
  `);

  await expect(page).toHaveTitle(/Starter/);
});

test('button interaction works', async ({ page }) => {
  await page.setContent(`
    <button id="start">Get started</button>
    <h2 id="status" hidden>Started</h2>
    <script>
      document.getElementById('start')?.addEventListener('click', () => {
        document.getElementById('status')?.removeAttribute('hidden');
      });
    </script>
  `);

  await page.getByRole('button', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Started' })).toBeVisible();
});
