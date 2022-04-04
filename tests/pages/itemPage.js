const { BasePage } = require('./basePage');

exports.ItemPage = class ItemPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.header = page.locator('h1');
    this.commentField = page.locator('//*[contains (@class, "cm-s-paper")]/descendant::textarea');
    this.submitButton = page.locator('[name="submit"]');
    this.commentAlert = page.locator('.alert-success');
    this.comment = page.locator('//*[contains (@id, "comment")]/descendant::p');
  }

  async addComment(comment) {
    await this.commentField.fill(comment);
    await Promise.all([
      this.page.waitForNavigation(),
      this.submitButton.click(),
    ]);
  }
};
