const { BasePage } = require('./basePage');

exports.FeedPage = class FeedPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.header = page.locator('h1');
    this.updatesButton = page.locator('//*[contains (@href, "/update/") and contains(@class, "btn")]');
    this.addToBookmarkButton = page.locator('.glyphicon-heart-empty');
    this.updatingAlert = page.locator('.alert-info');
    this.items = page.locator('//tbody/descendant::*[contains (@href, "/entry/")]');
  }

  async goto() {
    await this.page.goto(this.URL);
  }

  async updateFeed() {
    await Promise.all([
      this.page.waitForResponse((response) => response.url().includes('update')),
      this.updatesButton.click(),
    ]);
  }

  async openItem(ordinalValue) {
    const post = this.page.locator(`//tbody/descendant::*[contains (@href, "/entry/")][${ordinalValue}]`);
    const title = await post.textContent();
    await Promise.all([
      this.page.waitForNavigation(),
      post.click(),
    ]);
    return title;
  }

  async addFeedToBookmark() {
    await Promise.all([
      this.page.waitForResponse((response) => response.url().includes('toggle-bookmark')),
      this.addToBookmarkButton.click(),
    ]);
  }
};
