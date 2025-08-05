import { test, expect, Page } from '@playwright/test';
import * as allure from "allure-js-commons";

import { HomePage } from '../pages/HomePage';
import { InstallPage } from '../pages/InstallPage';
import { BasePage } from '../pages/BasePage';

let homePageObj: HomePage;
let installPageObj: InstallPage;
let basePageObj: BasePage;

// Below code will run before each test
test.beforeEach(async ({ page }) => {
   homePageObj = new HomePage(page);
   installPageObj = new InstallPage(page);
   basePageObj= new BasePage(page);
  await homePageObj.navigate();
  await page.waitForLoadState('domcontentloaded');
})

// Below code will run after each test
test.afterEach(async ({ page }) => {
 
 if (!page.isClosed()) {
      await page.close();
  } 
  /* 
The test fails before the element is found.
Then afterEach closes the page while an async wait is still in progress.
You don't need to close the page manually. Playwright Test auto-closes the page after each test.

*/


});



test('homepage has title', async ({ page }) => {

  await allure.displayName("Verify has title");
  await allure.owner("Kasun Yapa");
  await allure.tags("Web interface", "Landing Page");
  await allure.severity("critical");
  allure.description("This test verifies that the homepage has the correct title.");

  //const homePageObj = new HomePage(page)
  homePageObj.verifyTitle()

  // Take screenshot & attach to Allure
  // const screenshot = await page.screenshot();
  // allure.attachment("Homepage Screenshot", screenshot, "image/png");

  await basePageObj.captureAndAttachScreenshot("Homepage Screenshot");

  
});


test('installation page has heading', async ({ page }) => {


  await allure.displayName("Verify Installation page heading");
  await allure.owner("Kasun Yapa");
  await allure.tags("Web interface", "Landing Page");
  await allure.severity("critical");

  //const homePageObj = new HomePage(page)
  await homePageObj.clickGetStarted()


   //await page.waitForTimeout(1000); // Small delay

  //const installPage = new InstallPage(page)
  await installPageObj.verifyInstallationHeading() //✅ Awaited

    await basePageObj.captureAndAttachScreenshot("Installation Page");

/*
You're telling Playwright:

✅ Wait until the entire async function completes (await installPageObj.verifyInstallationHeading() //✅ Awaited)

— including all its internal awaits — before moving to the next step or ending the test.
So now it waits for Inside functions of Page Object method:

await this.installPageHeader.waitFor()
await expect(this.installPageHeader).toBeVisible()

Only then proceeds or finishes the test.

*/
  // const installPagesc = await page.screenshot();
  // allure.attachment("Installation Page", installPagesc, 'image/png');
  
});

test('Scroll to running tests', async ({ page }) => {


  await allure.displayName("Verify Scroll Running test");
  await allure.owner("Kasun Yapa");
  await allure.tags("Web interface", "Landing Page");
  await allure.severity("critical");

  await homePageObj.clickGetStarted();

  //const homePageObj = new HomePage(page)
  await installPageObj.scrollToRunningTestsLink();

  await page.waitForTimeout(1000); // Small delay

  await installPageObj.sclickRunningTestsLink();

  const installPageScrollRunTestsc = await page.screenshot();
  allure.attachment("Installation Page", installPageScrollRunTestsc, 'image/png');
  
});


