import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto('https://evo.dev.theysaid.io/login');
    await page.getByRole('textbox', { name: 'Email' }).fill('rehmanmusab0302@gmail.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('MusabUrRehman@123');
    await page.getByRole('button', { name: 'Sign in' }).click();
});
