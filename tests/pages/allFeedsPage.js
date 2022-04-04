const { BasePage } = require('./basePage');

exports.AllFeedsPage = class AllFeedsPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.URL = '/feeds/';
  }

  async goto() {
    await this.page.goto(this.URL);
  }

  async openFeed(feedName) {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click(`//tbody/descendant::*[contains (@href, "/feeds/") and text()="${feedName}"]`),
    ]);
  }
};
