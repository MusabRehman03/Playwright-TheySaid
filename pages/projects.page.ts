import { Page } from '@playwright/test';

export class ProjectsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://evo.dev.theysaid.io/projects');
  }

  async openCreateProject() {
    await this.page.locator('[data-test="add-project-button"]').click();
  }

  async chooseUsabilityTesting() {
    await this.page.locator('[data-test="project-type-radio-usabilitytesting"]').click();
  }

  async createProject() {
    await this.page.locator('[data-test="create-project-button"]').click();
    await this.page.locator('[data-test="generate-prompt-input"]').fill('test automation project');
    await this.page.locator('[data-test="generate-button"]').click();
  }
}
