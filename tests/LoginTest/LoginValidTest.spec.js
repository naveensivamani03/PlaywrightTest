const { test, expect } = require('@playwright/test');
// const { LoginSteps } = require('../../Steps/LoginSteps');
const {pageobjectmanager} = require('../../POManager.js/pageobjectmanager');

test('demo login verify', async ({ page }) => {
  const pom = new pageobjectmanager(page);
//   await loginSteps.SuccessLogin();
await pom.getLoginSteps().logintestbypass();
  // await loginSteps.logintestbypass();
});
 