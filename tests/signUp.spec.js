// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

const { AllFeedsPage } = require('./pages/allFeedsPage');
const { SignUpPage } = require('./pages/signUpPage');

test.describe('Sign Up', () => {
  test('Successful sign up', async ({ page }) => {
    const allFeedsPage = new AllFeedsPage(page);
    const signUpPage = new SignUpPage(page);

    await signUpPage.goto();
    await signUpPage.submitForm(faker.internet.userName(), faker.internet.password());
    await expect(page).toHaveURL(allFeedsPage.URL);
  });
});
