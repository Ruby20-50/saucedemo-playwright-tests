import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';


  test('standard user can log in', async ({ page}) => {
     const loginPage = new LoginPage(page);
     await loginPage.goto();
     await loginPage.login('standard_user', 'secret_sauce');
     
     await expect(page).toHaveURL(/inventory.html/);
  });

  test('locked out user sees error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  });