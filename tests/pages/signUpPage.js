exports.SignUpPage = class SignUpPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.URL = '/accounts/register/';
    this.usernameField = page.locator('[id="id_username"]');
    this.passwordField = page.locator('[id="id_password1"]');
    this.passwordConfirmationField = page.locator('[id="id_password2"]');
    this.submitButton = page.locator('[name="submit"]');
  }

  async goto() {
    await this.page.goto(this.URL);
  }

  async submitForm(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.passwordConfirmationField.fill(password);
    await this.submitButton.click();
  }
};
