exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.URL = '/accounts/login/';
    this.usernameField = page.locator('[id="id_username"]');
    this.passwordField = page.locator('[id="id_password"]');
    this.loginButton = page.locator('[type="submit"]');
  }

  async goto() {
    await this.page.goto(this.URL);
  }

  async submitForm(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
};
