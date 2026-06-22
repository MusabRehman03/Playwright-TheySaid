import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProjectsPage } from '../pages/projects.page';

test('create project - login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const projects = new ProjectsPage(page);
    await loginPage.login();
    await projects.goto();
    await projects.openCreateProject();
    await projects.chooseUsabilityTesting();
    await projects.createProject();
    await expect(page).toHaveURL(/.*\/projects\/.*/);
});
