// GlobalSetup.mjs
import {chromium}  from '@playwright/test';
import fs from 'fs';

import LoginSteps from "./Steps/LoginSteps";

import config from './Utilities/configReader';

export default async () => {
    console.log("Global Setup is running")
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const lgn=new LoginSteps(page);

//   await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

//   await page.locator('#userEmail').fill('asdfgh1212jk@gmail.com');
//   await page.locator('#userPassword').fill('Test@123');
//   await page.locator('#login').click();
console.log("button is clicked")
console.log(config.baseURL, config.username, config.password)
await page.goto(`${config.baseURL}/client/#/auth/login`, {
  waitUntil: "domcontentloaded"
});

await lgn.SuccessLogin(config.username, config.password);
await page.waitForURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
  // ensure folder exists
  fs.mkdirSync('storage', { recursive: true });

  await page.context().storageState({
    path: 'storage/auth.json'
  });
console.log("Global setup is executed")
  
  await browser.close();
};
