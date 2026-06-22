import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
    await expect(page).toHaveURL(/.*\/projects/);
});
