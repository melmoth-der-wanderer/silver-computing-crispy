// @ts-nocheck
const { test, expect } = require('@playwright/test');

const { AllFeedsPage } = require('./pages/allFeedsPage');
const { Api } = require('./utils/api');
const { LoginPage } = require('./pages/loginPage');

test.describe('Login', () => {
  let user;

  test.beforeAll(async ({ request }) => {
    const api = new Api(request);
    user = await api.getUser();
  });

  test('Successful login', async ({ page }) => {
    const allFeedsPage = new AllFeedsPage(page);
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.submitForm(user.username, user.password);
    await expect(page).toHaveURL(allFeedsPage.URL);
  });
});
