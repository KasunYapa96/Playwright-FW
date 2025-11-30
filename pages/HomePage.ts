import { Locator,Page, expect } from '@playwright/test';
import * as allure from "allure-js-commons";


let siteURL: string ='https://playwright.dev/';
let pageTitle: string = 'Fast and reliable end-to-end testing for modern web apps | Playwright';

export class HomePage {

  page: Page;
  
    //Locators
    getStartedBtn: Locator

  
  constructor(page: Page) {
   this.page=page;
    this.getStartedBtn =page.getByRole('link', { name: 'Get started' })
  }

   async captureScreenshot() {
    const screenshot = await this.page.screenshot();
    return screenshot;  // Return screenshot to be used later
  }


  async navigate() {
    await this.page.goto("https://playwright.dev/");
   
  }

  
  async verifyTitle() {
   await expect(this.page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
   
  }


/*
  async verifyTitle() {
    await expect(this.page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

    // ✅ Add Allure Step after successful assertion
    await allure.step("Verified homepage title successfully", async () => {
        const screenshot = await this.page.screenshot();  // Take a screenshot
        allure.attachment("Home Page Screenshot", screenshot, "image/png");  // Attach screenshot
    });
}
*/

  async clickGetStarted() {
    await this.getStartedBtn.waitFor({ state: 'visible' });
    //await this.page.waitForTimeout(500); // Small delay
    await this.getStartedBtn.click();
  }

//This Page is developed by kasun 
// I will push my changes in to git hub
/// I did this edit
//This too
  //checking github actions after a long

 
}
