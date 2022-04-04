const { BasePage } = require('./basePage');

exports.NewFeedPage = class NewFeedPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.URL = '/feeds/new/';
    this.feedUrlField = page.locator('[id="id_feed_url"]');
    this.submitButton = page.locator('[name="submit"]');
  }

  async goto() {
    await this.page.goto(this.URL);
  }

  async addFeed(url) {
    await this.feedUrlField.fill(url);
    await Promise.all([
      this.page.waitForNavigation(),
      this.submitButton.click(),
    ]);
  }
};
