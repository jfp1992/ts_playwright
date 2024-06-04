// test.ts
import { test, expect } from '@playwright/test';
import {Login} from "../classes/pageLogin";
import {Home} from "../classes/pageHome";


async function login(loginObject: Login, username: string){
  let password = process.env.saucedemoUsername;
  await loginObject.fieldUsername.fill(username)
  await loginObject.fieldPassword.fill(password)
  await loginObject.buttonLogin.click()
  await loginObject.waitForLoadState()
}


test.beforeEach(async ({ page , baseURL}) => {
  await page.goto(baseURL);
});


test('Login page structure and text objects', async ({ page }) => {
  let loginPage = new Login(page)

  //Check objects
  await expect(loginPage.fieldUsername).toHaveAttribute("placeholder", "Username")
  await expect(loginPage.fieldPassword).toHaveAttribute("placeholder", "Password")
  await expect(loginPage.buttonLogin).toHaveText("Login")
  await expect(loginPage.labelError).toBeHidden()

  //Attempt login
  await loginPage.buttonLogin.click()
  await expect(loginPage.labelError).toHaveText("Epic sadface: Username is required")
});


test('Login as a standard user', async ({ page }) => {
  let loginPage = new Login(page)
  let home = new Home(page)

  //Login as standard_user
  await login(loginPage, "standard_user")

  for (let i = 0; i <= 5; i++){
      home.wrapperProduct = i
      console.log(await home.labelProductTitle.innerText())
  }
});

