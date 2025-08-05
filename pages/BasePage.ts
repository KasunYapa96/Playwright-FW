import { Locator,Page, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

export class BasePage {

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async captureAndAttachScreenshot(name: string) {
    const screenshot = await this.page.screenshot();
    allure.attachment(name, screenshot, 'image/png');
  }
}
