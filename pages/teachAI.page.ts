import { Page } from '@playwright/test';
import { resolve } from 'path';

export class TeachAIPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.getByRole('link', { name: 'Teach AI' }).click({ timeout: 50000 });
  }

  async addDocument(filename: string) {
    await this.page.locator('[data-test="teach-ai-add-file"]').click();
    const filePath = resolve(process.cwd(), 'fixtures', filename);
    await this.page.locator('[data-test="teach-ai-file-dropzone-input"]').setInputFiles(filePath);
    await this.page.locator('[data-test="teach-ai-add-file-footer-save"]').click({ timeout: 50000 });
    await this.page.waitForSelector('text=Document summary');
  }

  /**
   * Verify the uploaded document is visible in the UI by waiting for the
   * "Document summary" text. Pass a custom timeout in milliseconds.
   */
  async verifyDocumentUpload(timeout = 50_000) {
    await this.page.waitForSelector('text=Document summary', { timeout });
  }
}
