import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { TeachAIPage } from '../pages/teachAI.page';

test('Teach AI Upload', async ({ page }) => {
    test.setTimeout(120_000);
    const loginPage = new LoginPage(page);
    const teach = new TeachAIPage(page);
    await loginPage.login();
    await teach.open();
    await teach.addDocument('AcademyBugs.docx');
    await teach.verifyDocumentUpload(50_000);
});