import { Locator , Page, expect } from '@playwright/test';
import * as allure from "allure-js-commons";



export class InstallPage {
   page: Page;

    //Locators
    installPageHeader: Locator
     runningTestLink: Locator
    

  constructor(page: Page) {
    this.page = page;
    this.installPageHeader = page.getByRole('heading', { name: 'Installation' })
    this.runningTestLink = page.locator('//a[contains(text(),"Blog")]');
  }

   
async captureScreenshot() {
    const screenshot = await this.page.screenshot();
    return screenshot;
    
  }


  async verifyInstallationHeading() {

    await this.installPageHeader.waitFor({ state: 'visible' });  //visible before asserting it.
    await expect(this.installPageHeader).toBeVisible();      //Assert it
    // const screenshot = await this.captureScreenshot();  // Await screenshot capture
    // allure.attachment("Verify Install Page Heading - Screenshot", screenshot, 'image/png');  // Attach screenshot to Allure report
  
   /* 
    Playwright will wait until the heading is visible before asserting it.
    Avoids flaky behavior due to transitions or rendering delays.
    Is much better than using waitForTimeout(1000).
  */

    /*

    this.installPageHeader??

You’re saying:
"Use the installPageHeader that belongs to this object (i.e., the current instance of the class)."

Without "this. " 

ou would get an error, because installPageHeader doesn't exist in the method's local scope — 
it only exists as a property of the class.

    */

    
}

    async scrollToRunningTestsLink() {
      await this.runningTestLink.scrollIntoViewIfNeeded();
      
      await this.captureScreenshot(); 
  }

  async sclickRunningTestsLink() {
      await this.runningTestLink.click();
      await this.runningTestLink.waitFor({ state: 'visible' });
      await this.captureScreenshot();
  }



  //Im Indika and Im coding in InstallPage.ts
  //Will merge this to development
//Indi after pulling git actions

}

