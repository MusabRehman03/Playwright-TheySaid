import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';
import { resolve } from 'path';

test('Teach AI Upload', async ({ page }) => {
    test.setTimeout(120_000);
    await login(page);
    await page.getByRole('link', { name: 'Teach AI' }).click({timeout: 50000});
    await page.locator('[data-test="teach-ai-add-file"]').click();
    const filePath = resolve(process.cwd(), 'fixtures', 'AcademyBugs.docx');
    await page.locator('[data-test="teach-ai-file-dropzone-input"]').setInputFiles(filePath);
    await page.locator('[data-test="teach-ai-add-file-footer-save"]').click({timeout: 50000});
    await expect(page.getByText('Document summary')).toBeVisible();
    await page.getByText('Document summary').click();
});