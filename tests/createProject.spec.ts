import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';

test('create project - login', async ({ page }) => {
    // Reuse the login helper to reach the projects page
    await login(page);
    await page.goto('https://evo.dev.theysaid.io/projects');
    await page.locator('[data-test="add-project-button"]').click();
    await page.locator('[data-test="project-type-radio-usabilitytesting"]').click();
    await page.locator('[data-test="create-project-button"]').click();
    await page.locator('[data-test="generate-prompt-input"]').fill('test automation project');
    await page.locator('[data-test="generate-button"]').click();
    await page.goto('https://evo.dev.theysaid.io/projects/05517814-3fe7-4c16-9029-81f018ccf168?tab=form');
});
